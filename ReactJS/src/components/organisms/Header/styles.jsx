import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    opacity: 0.9;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.aliceblue};
`;