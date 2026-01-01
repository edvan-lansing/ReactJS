import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const StatusMessage = styled.div`
  margin: 0.75rem 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const UserCard = styled.li`
  background: transparent;
  border-radius: 0.75rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
`;


export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }

  &:focus-visible {
    outline: 2px solid ${colors.focusOutline};
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
`;
export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.lightOverlay};
  margin-top: auto;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  list-style: none;
  padding: 1rem;
  margin: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
