import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input, Text, Select } from "../../components/atoms";
import { ButtonGroup } from "../../components/molecules";
import { ContainerEditUser, CardActions } from "./styles";
import { useUser } from "../../hooks/useUser";
import { getCountriesWithStates } from "../../services/api";
import { formatCPF, formatPhone } from "../../utils/formatters";

export function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setData, loading, error, saving, save } = useUser(id);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountriesWithStates()
      .then(setCountries)
      .catch(() => setCountries([]));
  }, []);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.name === data?.pais) || null,
    [countries, data?.pais]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setData((prev) => {
        const current = prev || {};
        if (name === "cpf") return { ...current, cpf: formatCPF(value) };
        if (name === "telefone")
          return { ...current, telefone: formatPhone(value) };
        if (name === "pais") return { ...current, pais: value, estado: "" };
        return { ...current, [name]: value };
      });
    },
    [setData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await save();
      navigate("/users");
    } catch {
      /* erro já exposto pelo hook */
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <ContainerEditUser onSubmit={handleSubmit}>
      <Text
        size="1.5em"
        weight="bold"
        align="center"
        style={{ marginBottom: "0.5em" }}
      >
        Editar Usuário
      </Text>
      {error && (
        <Text color="tomato" style={{ marginBottom: "0.5em" }}>
          {error}
        </Text>
      )}
      <div className="field-grid">
        <Input
          label="Nome"
          name="nome"
          value={data?.nome || ""}
          onChange={handleChange}
          required
        />
        <Input
          label="Data de Nascimento"
          name="dataNascimento"
          type="date"
          value={data?.dataNascimento || ""}
          onChange={handleChange}
          required
        />
        <Input
          label="CPF"
          name="cpf"
          value={data?.cpf || ""}
          onChange={handleChange}
          required
        />
        <Input
          label="Apelido"
          name="apelido"
          value={data?.apelido || ""}
          onChange={handleChange}
          placeholder="Como você gosta de ser chamado"
        />
        <Select
          label="Gênero"
          name="genero"
          value={data?.genero || ""}
          onChange={handleChange}
          required
          options={[
            { label: "Masculino", value: "Masculino" },
            { label: "Feminino", value: "Feminino" },
            { label: "Outros", value: "Outros" },
          ]}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={data?.email || ""}
          onChange={handleChange}
          required
        />
        <Input
          label="Telefone"
          name="telefone"
          value={data?.telefone || ""}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          required
        />
        <Select
          label="País"
          name="pais"
          value={data?.pais || ""}
          onChange={handleChange}
          required
          options={countries.map((c) => ({ label: c.name, value: c.name }))}
        />
        <Select
          label="Estado"
          name="estado"
          value={data?.estado || ""}
          onChange={handleChange}
          required
          disabled={!selectedCountry}
          options={
            selectedCountry
              ? selectedCountry.states.map((s) => ({
                  label: s.name,
                  value: s.name,
                }))
              : []
          }
        />
      </div>
        <ButtonGroup
          direction="row"
          spaceBetween
          padding="1em 0 0"
          firstLabel={saving ? "Salvando..." : "Salvar"}
          secondLabel="Cancelar"
          firstColor="buttonPrimary"
          secondColor="buttonBack"
          labelColor="white"
          firstProps={{ type: "submit", disabled: saving, fullWidth: true }}
          secondProps={{ type: "button", disabled: saving, fullWidth: true }}
          onFirstClick={() => {}}
          onSecondClick={() => navigate("/users")}
        />
    </ContainerEditUser>
  );
};
