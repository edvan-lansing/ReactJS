import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const StyledText = styled.span`
  font-size: ${({ size }) => size || "1em"};
  color: ${({ color }) => colors[color] || color || "#000"};
  font-weight: ${({ weight }) => weight || "normal"};
  text-align: ${({ align }) => align || "left"};
  word-break: break-word;
`;
