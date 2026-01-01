import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUsers = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (e) {
    const message = e?.response?.data?.message || "Erro ao buscar usuários";
    throw new Error(message);
  }
};

export const getUser = async (id) => {
  try {
    const res = await api.get(`/users/${id}`);
    return res.data;
  } catch (e) {
    const message = e?.response?.data?.message || "Erro ao buscar usuário";
    throw new Error(message);
  }
};

export const updateUser = async (id, data) => {
  try {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
  } catch (e) {
    const message = e?.response?.data?.message || "Erro ao atualizar usuário";
    throw new Error(message);
  }
};

export const createUser = async (data) => {
  try {
    const res = await api.post("/users", data);
    return res.data;
  } catch (e) {
    const message = e?.response?.data?.message || "Erro ao criar usuário";
    throw new Error(message);
  }
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`/users/${id}`);
  } catch (e) {
    const message = e?.response?.data?.message || "Erro ao excluir usuário";
    throw new Error(message);
  }
};

export const getCountriesWithStates = async () => {
  try {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries/states");
    const data = await res.json();
    return data.data ?? [];
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    const message = "Erro ao buscar países e estados";
    throw new Error(message);
  }
};
