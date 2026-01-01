import React, { useEffect, useMemo, useState } from "react";
import { Text, Button, StepDots, Select } from "../../../atoms";
import { GenericCard, ButtonGroup } from "../../../molecules";
import { colors } from "../../../../styles/tokens";
import { formatDate } from "../../../../utils/formatters";
import { getCountriesWithStates } from "../../../../services/api";
import { ContainerForm, InfoSection, InfoRow } from "./styles";
import { useNavigate } from "react-router-dom";

export const Step4 = ({ formData, onChange, onBack, onSubmit, loading, error }) => {

  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);

  /* ===== fetch países ===== */
  useEffect(() => {
    getCountriesWithStates()
      .then(setCountries)
      .catch(() => setCountries([]));
  }, []);

  /* ===== país selecionado ===== */
  const selectedCountry = useMemo(
    () => countries.find((c) => c.name === formData.pais) || null,
    [countries, formData.pais]
  );

  /* ===== handler único (ATÔMICO) ===== */
  const handleChange = (e) => {
    const { name } = e.target;
    
    if (name === "pais") {
      // limpa estado quando país muda
      onChange({ target: { name: "estado", value: "" } });
    }
    
    onChange(e);
  };

  return (
    <>
      <ButtonGroup
        firstLabel="Voltar"
        secondLabel="Voltar Início"
        firstColor="buttonBack"
        labelColor="textLight"
        spaceBetween={true}
        padding="1em 1em"
        onFirstClick={onBack}
        onSecondClick={() => navigate("/users")}
      />
      <GenericCard
        title="Confirmação"
        subtitle={<StepDots total={4} current={4} />}
        backgroundColor={colors.cardPrimaryDark}
        elevation
      >
        <ContainerForm
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {error && <Text color="tomato">{error}</Text>}
          <InfoSection>
            <InfoRow>
              <Text weight="bold">Nome:</Text>
              <Text>{formData.nome}</Text>
            </InfoRow>
            <InfoRow>
              <Text weight="bold">Data de Nascimento:</Text>
              <Text>{formatDate(formData.dataNascimento)}</Text>
            </InfoRow>
            <InfoRow>
              <Text weight="bold">CPF:</Text>
              <Text>{formData.cpf}</Text>
            </InfoRow>
            <InfoRow>
              <Text weight="bold">Apelido:</Text>
              <Text>{formData.apelido}</Text>
            </InfoRow>
            <InfoRow>
              <Text weight="bold">Gênero:</Text>
              <Text>{formData.genero}</Text>
            </InfoRow>
            <InfoRow>
              <Text weight="bold">Email:</Text>
              <Text>{formData.email}</Text>
            </InfoRow>
            <InfoRow>
              <Text weight="bold">Telefone:</Text>
              <Text>{formData.telefone}</Text>
            </InfoRow>
          </InfoSection>
          <Select
            label="País"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            required
            options={countries.map((c) => ({
              label: c.name,
              value: c.name,
            }))}
          />

          <Select
            label="Estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            disabled={!selectedCountry}
            required
            options={
              selectedCountry
                ? selectedCountry.states.map((s) => ({
                    label: s.name,
                    value: s.name,
                  }))
                : []
            }
          />
          <Button type="submit" color="buttonPrimary" disabled={loading}>
            {loading ? "Finalizando..." : "Finalizar"}
          </Button>
        </ContainerForm>
      </GenericCard>
    </>
  );
};
