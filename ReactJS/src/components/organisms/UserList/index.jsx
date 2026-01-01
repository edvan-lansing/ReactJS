import React from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon, TrashIcon, Text } from "../../atoms";
import { ButtonGroup, GenericCard } from "../../molecules";
import { colors } from "../../../styles/tokens";
import { formatDate } from "../../../utils/formatters";
import { useUsers } from "../../../hooks/useUsers";
import {
  Page,
  UserCard,
  UserInfo,
  InfoRow,
  StatusMessage,
  CardActions,
  Grid,
} from "./styles";

export const UserList = ({ onEdit, onBack, onCreate }) => {
  const { users, loading, error, removeUser } = useUsers();
  const navigate = useNavigate();

  return (
    <>
      <ButtonGroup
        firstLabel="Voltar"
        secondLabel="Cadastrar Novo Usuário"
        firstColor="buttonBack"
        secondColor="homeButtonPrimary"
        labelColor="textLight"
        spaceBetween
        padding="1em 1em 0"
        onFirstClick={onBack || (() => navigate("/"))}
        onSecondClick={onCreate || (() => navigate("/register"))}
      />

      <Page>
        <GenericCard
          title="Usuários Cadastrados"
          backgroundColor={colors.cardPrimaryDark}
          elevation
        >
          {loading && (
            <StatusMessage>
              <Text color={colors.aliceblue}>Carregando...</Text>
            </StatusMessage>
          )}
          {error && (
            <StatusMessage>
              <Text color="tomato">{error}</Text>
            </StatusMessage>
          )}
          {!loading && users.length === 0 && (
            <StatusMessage>
              <Text color={colors.aliceblue}>Nenhum usuário cadastrado.</Text>
            </StatusMessage>
          )}
        </GenericCard>
      </Page>

      <Grid>
        {users.map((user) => (
          <UserCard key={user.id}>
            <GenericCard>
              <UserInfo>
                <InfoRow>
                  <Text weight="bold">Nome:</Text>
                  <Text>{user.name}</Text>
                </InfoRow>
                <InfoRow>
                  <Text weight="bold">E-mail:</Text>
                  <Text>{user.email}</Text>
                </InfoRow>
                <InfoRow>
                  <Text weight="bold">CPF:</Text>
                  <Text>{user.cpf}</Text>
                </InfoRow>
                <InfoRow>
                  <Text weight="bold">Nascimento:</Text>
                  <Text>{user.birthDate ? formatDate(user.birthDate) : ""}</Text>
                </InfoRow>
                <InfoRow>
                  <Text weight="bold">Telefone:</Text>
                  <Text>{user.telephone}</Text>
                </InfoRow>
                <InfoRow>
                  <Text weight="bold">Gênero:</Text>
                  <Text>{user.gender}</Text>
                </InfoRow>
                <InfoRow>
                  <Text weight="bold">Local:</Text>
                  <Text>{user.state} / {user.country}</Text>
                </InfoRow>
              </UserInfo>
              <CardActions>
                <ButtonGroup
                  direction="row"
                  firstLabel="Editar"
                  secondLabel="Excluir"
                  spaceBetween={false}
                  onFirstClick={() => onEdit(user.id)}
                  onSecondClick={() => removeUser(user.id)}
                />
              </CardActions>
            </GenericCard>
          </UserCard>
        ))}
      </Grid>
    </>
  );
};
