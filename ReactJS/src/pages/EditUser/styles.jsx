import styled from "styled-components";
import { colors } from "../../styles/tokens";

export const ContainerEditUser = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #564865;
  border-radius: 1.25em;
  padding: 2em 1em;
  width: 100%;
  max-width: 37.5em;
  margin: 2em auto;
  box-sizing: border-box;

  h1 {
    color: white;
    font-size: 2em;
    margin-bottom: 1.25em;
  }

  div {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .field-grid {
    display: grid;
    width: 100%;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
    margin-top: 0.5em;
  }

  @media (max-width: 600px) {
    padding: 1em 0.5em;
    max-width: 100%;
    border-radius: 0.75em;
    h1 {
      font-size: 1.25em;
    }
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-top: 1rem;
  //border-top: 1px solid ${colors.lightOverlay};
  margin-top: auto;
  flex-direction: row;
`;