import { useCallback, useEffect, useState } from "react";
import { getUser, updateUser } from "../services/api";
import { mapAPIToFormData, mapFormDataToAPI } from "../utils/mappers";

export function useUser(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getUser(id);
      setData(mapAPIToFormData(res || {}));
    } catch (e) {
      setError(e?.message || "Falha ao carregar usuário");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const save = useCallback(
    async (payload) => {
      if (!id) return;
      setSaving(true);
      setError(null);
      try {
        const formData = payload ?? data;
        const body = mapFormDataToAPI(formData || {});
        await updateUser(id, body);
      } catch (e) {
        setError(e?.message || "Falha ao salvar usuário");
        throw e;
      } finally {
        setSaving(false);
      }
    },
    [id, data]
  );

  return { data, setData, loading, error, saving, refresh, save };
}
