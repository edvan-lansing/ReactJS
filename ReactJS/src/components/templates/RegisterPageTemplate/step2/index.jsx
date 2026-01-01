import React from "react";
import { Input, Button, StepDots, Select } from "../../../atoms";
import { GenericCard, ButtonGroup } from "../../../molecules";
import { colors } from "../../../../styles/tokens";

export const Step2 = (props) => {

  return (
    <>
      <ButtonGroup
        firstLabel="Voltar"
        firstColor="buttonBack"
        labelColor="white"
        spaceBetween
        padding="1em 1em 0"
        onFirstClick={props.onBack}
      />
      <GenericCard
        title="Informações Adicionais"
        subtitle={<StepDots total={4} current={2} />}
        backgroundColor={colors.cardPrimaryDark}
        elevation
      >
        <form
          onSubmit={e => { e.preventDefault(); props.onNext(); }}
          style={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
        <Input
          label="Apelido"
          name="apelido"
          placeholder="Apelido"
          value={props.formData.apelido}
          onChange={props.onChange}
          required
        />
        <Select
          label="Gênero"
          name="genero"
          value={props.formData.genero}
          onChange={props.onChange}
          required
          options={[
            { label: "Masculino", value: "Masculino" },
            { label: "Feminino", value: "Feminino" },
            { label: "Outros", value: "Outros" },
          ]}
        />
        <Button type="submit" color="buttonPrimary">Próximo</Button>
        </form>
      </GenericCard>
    </>
  );
};
