import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const SelectLabel = styled.label`
  font-size: 0.75rem;
  opacity: 0.8;
  color: ${colors.aliceblue};
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "▾";
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: ${colors.aliceblue};
    font-size: 0.9em;
    opacity: 0.8;
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 48px;
  padding: 0 42px 0 14px; /* espaço para o ícone à direita */
  border-radius: 14px;
  border: 1px solid ${colors.lightOverlay};
  background-color: ${colors.darkOverlay};
  color: ${colors.aliceblue};
  font-size: 0.95rem;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:focus {
    border-color: ${colors.homeButtonPrimary};
    box-shadow: 0 0 0 3px ${colors.homeButtonPrimarySoft};
    background-color: ${colors.darkOverlay};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  option {
    color: ${colors.black};
  }

`;
