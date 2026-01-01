import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  HomeActions
} from "./styles";
import { UserIcon } from "../../components/atoms";
import { ButtonGroup, GenericCard } from "../../components/molecules";
import { Header } from "../../components/organisms";

export function Home() {
  const navigate = useNavigate();

  return (
    <Page>
      <GenericCard elevation>
        <Header
          icon={<UserIcon width="1.6em" height="1.6em" />}
          title="Cadastro de Usuário"
        />
        <HomeActions>
          <ButtonGroup
            direction="row"
            firstLabel="Cadastro"
            secondLabel="Usuários Cadastrados"
            onFirstClick={() => navigate("/register")}
            onSecondClick={() => navigate("/users")}
            firstColor="homeButtonPrimarySoft"
            secondColor="homeButtonPrimary"
          />
        </HomeActions>
      </GenericCard>
    </Page>
  );
}
