import styled from "styled-components";
import { colors } from "../../../styles/tokens";


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
  opacity: 0.8;
  color: ${colors.aliceblue};
`;

export const StyledInput = styled.input`
  height: 48px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid ${colors.lightOverlay};
  background: ${colors.darkOverlay};
  color: ${colors.aliceblue};
  font-size: 0.95rem;
  transition: all 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${colors.homeButtonPrimary};
    box-shadow: 0 0 0 3px ${colors.homeButtonPrimarySoft};
    background: ${colors.darkOverlay};
  }

  &::placeholder {
    color: ${colors.whitesmoke};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
