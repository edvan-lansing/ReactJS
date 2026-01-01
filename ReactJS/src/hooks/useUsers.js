import { useCallback, useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      const normalized = Array.isArray(data)
        ? data
        : Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data?.users)
        ? data.users
        : Array.isArray(data?.items)
        ? data.items
        : Array.isArray(data?.content)
        ? data.content
        : [];

      if (!Array.isArray(normalized) || normalized.length === 0) {
        // Ajuda a depurar caso o backend mude o shape
        console.warn("useUsers: resposta sem lista de usuários", data);
      }

      setUsers(normalized);
    } catch (err) {
      setError(err?.message || "Falha ao carregar usuários");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const removeUser = useCallback(
    async (id) => {
      const previous = users;
      setUsers((current) => current.filter((u) => u.id !== id));
      try {
        await deleteUser(id);
      } catch (err) {
        setUsers(previous);
        setError(err?.message || "Falha ao remover usuário");
        throw err;
      }
    },
    [users]
  );

  return { users, loading, error, refresh, removeUser };
}
