import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../atoms/input";
import { GenericCard, ButtonGroup } from "../../../molecules";
import StepDots from "../../../atoms/step-dots";
import { ContainerForm } from "./styles";
import { formatCPF } from "../../../../utils/formatters";
import { Button } from "../../../atoms/button";
import { colors } from "../../../../styles/tokens";

export const Step1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ButtonGroup
        firstLabel="Voltar"
        secondLabel="Usuários Cadastrados"
        firstColor="buttonBack"
        secondColor="homeButtonPrimary"
        labelColor="textLight"
        spaceBetween={true}
        onFirstClick={() => navigate("/")}
        onSecondClick={() => navigate("/users")}
        padding="1em 1em"
      />

      <GenericCard
        title="Dados Pessoais"
        subtitle={<StepDots total={4} current={1} />}
        backgroundColor={colors.cardPrimaryDark}
        elevation
      >
        <ContainerForm
          onSubmit={(e) => {
            e.preventDefault();
            props.onNext();
          }}
        >
          <Input
            label="Nome: "
            name="nome"
            placeholder={"Digite seu nome"}
            value={props.formData.nome}
            onChange={props.onChange}
            required
          />

          <Input
            label="Data de Nascimento: "
            name="dataNascimento"
            type="date"
            value={props.formData.dataNascimento}
            onChange={props.onChange}
            required
          />

          <Input
            label="CPF: "
            name="cpf"
            placeholder={"000.000.000-00"}
            value={props.formData.cpf}
            onChange={(e) =>
              props.onChange({
                target: { name: "cpf", value: formatCPF(e.target.value) }
              })
            }
            required
          />

          <Button type="submit" fullWidth color="buttonPrimary">Próximo</Button>
        </ContainerForm>
      </GenericCard>
    </>
  );
};
