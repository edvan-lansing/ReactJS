import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const DotsRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap || "0.5rem"};
`;

export const Dot = styled.span`
  width: ${({ size }) => size || "10px"};
  height: ${({ size }) => size || "10px"};
  border-radius: 50%;
  background: ${({ active, activeColor }) =>
    active ? activeColor || colors.white : "transparent"};
  border: ${({ active, inactiveColor, borderWidth }) =>
    active
      ? "none"
      : `${borderWidth || "2px"} solid ${inactiveColor || colors.white}`};
  opacity: ${({ active, inactiveOpacity }) =>
    active ? 1 : inactiveOpacity || 0.75};
  transition: all 0.2s ease;
`;
