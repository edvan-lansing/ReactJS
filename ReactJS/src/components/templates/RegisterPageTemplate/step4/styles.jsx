import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;

  button {
    align-self: center;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1em;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: baseline;
`;
