# API

Backend Express + MySQL com Prisma para gerenciamento de usuários.

## Requisitos
- Node.js 18+
- MySQL 8 (pode usar o docker-compose incluso)

## Banco via Docker
```sh
docker compose up -d
```
MySQL expõe `3306`, banco padrão `dbmysql`, senha root `root` (ver docker-compose.yml). Ajuste se necessário.

## Variáveis de ambiente (.env)
```
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_NAME=dbmysql
```
`PORT` é opcional (padrão 3000).

## Instalação e execução
```sh
npm install
npm start
```
O servidor sobe em `http://localhost:3000` (ou `PORT` definido).

## Endpoints principais
- `GET /health` → `{ status: "ok" }`
- `GET /users` → lista paginada `{ data, page, pageSize, total, totalPages }`
  - Query params: `page` (>=1), `pageSize` (1–100), `q` (busca em name/nickname/email/cpf/telephone/state/country), `gender` (Masculino|Feminino|Outros), `state`, `country`.
  - Campos retornados: `id, name, birthDate (dd-MM-yyyy), cpf (mascarado), nickname, gender, email, telephone, state, country, createdAt, updatedAt`.
- `GET /users/:id` → usuário único, mesmos campos/formatos da lista.
- `POST /users` → cria usuário. Body JSON (todos obrigatórios):
```json
{
  "name": "Fulano",
  "birthDate": "01-01-2000", // dd-MM-yyyy
  "cpf": "12345678900",
  "nickname": "fulano",
  "gender": "Masculino",
  "email": "fulano@example.com",
  "telephone": "5511999999999",
  "state": "SP",
  "country": "BR"
}
```
- `PUT /users/:id` → atualiza campos informados (mesmos nomes; `birthDate` também em dd-MM-yyyy).
- `DELETE /users/:id` → remove usuário.

## Notas
- CORS já liberado (pode chamar direto do front).
- `cpf` vem mascarado nas respostas.
- `birthDate` vem em `dd-MM-yyyy`.
- Ordenação padrão da lista: `id DESC`.

## Consumo no frontend (exemplo fetch)
```js
const API = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

async function listUsers({ page = 1, pageSize = 20, q, gender, state, country } = {}) {
  const params = new URLSearchParams({ page, pageSize });
  if (q) params.set('q', q);
  if (gender) params.set('gender', gender);
  if (state) params.set('state', state);
  if (country) params.set('country', country);

  const res = await fetch(`${API}/users?${params.toString()}`);
  if (!res.ok) throw new Error('Erro ao buscar usuários');
  return res.json(); // { data, page, pageSize, total, totalPages }
}

async function getUser(id) {
  const res = await fetch(`${API}/users/${id}`);
  if (!res.ok) throw new Error('Usuário não encontrado');
  return res.json();
}
```

## Dicas rápidas
- Defina `VITE_API_URL` (ou variável equivalente) no front apontando para o backend.
- Valide erros 400/404/500 vindos da API.
- Para seeds ou migrações, ajuste o schema no prisma e regenere o cliente com `npx prisma generate`.
