import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
import { parse, isValid, format } from 'date-fns';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const allowedGenders = ["Masculino", "Feminino", "Outros"];

// Helpers to keep responses consistent and hide sensitive data
const maskCpf = (cpf) => {
  if (!cpf) return null;
  const digits = String(cpf).replace(/\D/g, '');
  if (digits.length < 4) return '*'.repeat(digits.length);
  const start = digits.slice(0, 3);
  const end = digits.slice(-2);
  return `${start}***${'*'.repeat(Math.max(0, digits.length - 5))}${end}`;
};

const formatUser = (user) => ({
  ...user,
  birthDate: user.birthDate ? format(new Date(user.birthDate), 'dd-MM-yyyy') : null,
  cpf: maskCpf(user.cpf),
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page || '1', 10);
    const pageSize = parseInt(req.query.pageSize || '20', 10);
    const q = (req.query.q || '').trim();
    const gender = (req.query.gender || '').trim();
    const state = (req.query.state || '').trim();
    const country = (req.query.country || '').trim();
    const maxPageSize = 100;

    if (Number.isNaN(page) || page < 1) return res.status(400).json({ error: 'Parâmetro page inválido.' });
    if (Number.isNaN(pageSize) || pageSize < 1 || pageSize > maxPageSize) {
      return res.status(400).json({ error: `Parâmetro pageSize deve estar entre 1 e ${maxPageSize}.` });
    }
    if (gender && !allowedGenders.includes(gender)) {
      return res.status(400).json({ error: 'Gênero inválido. Use Masculino, Feminino ou Outros.' });
    }

    const whereClauses = [];
    const params = [];

    if (q) {
      whereClauses.push('(name LIKE ? OR nickname LIKE ? OR email LIKE ? OR cpf LIKE ? OR telephone LIKE ? OR state LIKE ? OR country LIKE ?)');
      const like = `%${q}%`;
      params.push(like, like, like, like, like, like, like);
    }
    if (gender) {
      whereClauses.push('gender = ?');
      params.push(gender);
    }
    if (state) {
      whereClauses.push('state LIKE ?');
      params.push(state);
    }
    if (country) {
      whereClauses.push('country LIKE ?');
      params.push(country);
    }

    const whereSql = whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : '';
    const offset = (page - 1) * pageSize;

    const [countRows] = await pool.query(`SELECT COUNT(*) AS total FROM users ${whereSql}`, params);
    const total = countRows[0]?.total || 0;

    const [rows] = await pool.query(
      `SELECT * FROM users ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`,
      [...params, pageSize, offset]
    );

    const data = rows.map(formatUser);
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    res.json({ data, page, pageSize, total, totalPages });
  } catch (err) {
    console.error('GET /users error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(formatUser(rows[0]));
  } catch (err) {
    console.error('GET /users/:id error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const {
      name,
      birthDate: rawDate,
      cpf,
      nickname,
      gender,
      email,
      telephone,
      state,
      country,
    } = req.body;

    if (!name || !rawDate || !cpf || !nickname || !gender || !email || !telephone || !state || !country) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    if (!allowedGenders.includes(gender)) {
      return res.status(400).json({ error: 'Gênero inválido. Escolha Masculino, Feminino ou Outros.' });
    }

    const parsedDate = parse(rawDate, 'dd-MM-yyyy', new Date());
    if (!isValid(parsedDate)) {
      return res.status(400).json({ error: 'Formato de data inválido. Use dd-MM-yyyy.' });
    }
    const birthDateSql = format(parsedDate, 'yyyy-MM-dd HH:mm:ss');

    const sql = `INSERT INTO users
      (name, birthDate, cpf, nickname, gender, email, telephone, state, country, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;
    const params = [name, birthDateSql, cpf, nickname, gender, email, telephone, state, country];

    const [result] = await pool.query(sql, params);
    const insertedId = result.insertId;
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [insertedId]);
    res.status(201).json(formatUser(rows[0]));
  } catch (err) {
    console.error('POST /users error:', err);
    if (err && err.code === 'ER_DUP_ENTRY') {
      // MySQL duplicate entry error message contains the key name
      return res.status(400).json({ error: 'Valor duplicado (cpf ou email já cadastrado).' });
    }
    res.status(500).json({ error: err.message || 'Failed to create user.' });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

    const {
      name,
      birthDate: rawDate,
      cpf,
      nickname,
      gender,
      email,
      telephone,
      state,
      country,
    } = req.body;

    if (gender && !allowedGenders.includes(gender)) {
      return res.status(400).json({ error: 'Gênero inválido.' });
    }

    let birthDateSql = undefined;
    if (rawDate) {
      const parsedDate = parse(rawDate, 'dd-MM-yyyy', new Date());
      if (!isValid(parsedDate)) return res.status(400).json({ error: 'Formato de data inválido. Use dd-MM-yyyy.' });
      birthDateSql = format(parsedDate, 'yyyy-MM-dd HH:mm:ss');
    }

    // Build dynamic update
    const fields = [];
    const params = [];
    if (name !== undefined) { fields.push('name = ?'); params.push(name); }
    if (birthDateSql !== undefined) { fields.push('birthDate = ?'); params.push(birthDateSql); }
    if (cpf !== undefined) { fields.push('cpf = ?'); params.push(cpf); }
    if (nickname !== undefined) { fields.push('nickname = ?'); params.push(nickname); }
    if (gender !== undefined) { fields.push('gender = ?'); params.push(gender); }
    if (email !== undefined) { fields.push('email = ?'); params.push(email); }
    if (telephone !== undefined) { fields.push('telephone = ?'); params.push(telephone); }
    if (state !== undefined) { fields.push('state = ?'); params.push(state); }
    if (country !== undefined) { fields.push('country = ?'); params.push(country); }
    if (!fields.length) return res.status(400).json({ error: 'Nenhum campo para atualizar.' });

    fields.push('updatedAt = NOW()');
    const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
    params.push(id);

    await pool.query(sql, params);
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(formatUser(rows[0]));
  } catch (err) {
    console.error('PUT /users/:id error:', err);
    if (err && err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Valor duplicado (cpf ou email já cadastrado).' });
    }
    res.status(500).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário deletado.' });
  } catch (err) {
    console.error('DELETE /users/:id error:', err);
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));

// Graceful shutdown
const shutdown = async () => {
  console.log('Shutting down server...');
  server.close(() => console.log('HTTP server closed'));
  try {
    await pool.end();
    console.log('DB pool closed');
  } catch (e) {
    console.error('Error closing DB pool', e);
  } finally {
    process.exit(0);
  }
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);