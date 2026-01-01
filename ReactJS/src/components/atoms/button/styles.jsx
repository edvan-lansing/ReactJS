import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { getVariantStyles } from "../../../styles/buttonVariants";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2em;
  font-size: 1em;
  font-weight: 600;
  padding: 0.75em 1.5em;
  cursor: pointer;
  transition: all 0.50s ease;

  ${({ $size }) =>
    $size === "small" &&
    `
    font-size: 0.85em;
    padding: 0.5em 1em;
    min-height: 2em;
  `}

  ${({ $size }) =>
    $size === "large" &&
    `
    font-size: 1.15em;
    padding: 1em 2em;
    min-height: 3em;
  `}

  ${({ $fullWidth }) =>
  $fullWidth &&
  `
    width: 100%;
    min-height: 2.5em;
  `}

  /** Variant styles */
  ${({ $variant }) => $variant && getVariantStyles($variant)}

  /** Cor direta via prop (fallback) */
  ${({ $color, $variant }) =>
    $color && !$variant &&
    `
    background-color: ${colors[$color] || $color};
    color: #fff;
    &:hover:not(:disabled) {
      filter: brightness(1.05);
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
    }
    &:focus-visible {
      outline: 2px solid ${colors[$color] || $color};
      outline-offset: 2px;
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
