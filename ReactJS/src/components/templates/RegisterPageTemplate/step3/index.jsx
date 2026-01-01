import React from "react";
import { Input, Button, StepDots } from "../../../atoms";
import { GenericCard, ButtonGroup } from "../../../molecules";
import { colors } from "../../../../styles/tokens";
import { formatPhone } from "../../../../utils/formatters";

export const Step3 = (props) => {
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
        title="Informações de Contato"
        subtitle={<StepDots total={4} current={3} />}
        backgroundColor={colors.cardPrimaryDark}
        elevation
      >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onNext();
        }}
        style={{ display: "flex", flexDirection: "column", gap: "1em" }}
      >
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="email"
        value={props.formData.email}
        onChange={props.onChange}
        required
      />
      <Input
        label="Telefone"
        name="telefone"
        placeholder="(00) 00000-0000"
        value={props.formData.telefone}
        onChange={(e) =>
          props.onChange({
            target: { name: "telefone", value: formatPhone(e.target.value) }
          })
        }
        required
      />
      <Button type="submit" color="buttonPrimary">Próximo</Button>
      </form>
    </GenericCard>
  </>
);
}
  
