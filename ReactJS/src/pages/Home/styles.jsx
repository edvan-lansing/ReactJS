import styled from "styled-components";
import { colors } from "../../styles/tokens";

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5;
  box-sizing: border-box;
`;

export const HomeHeader = styled.div`
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

export const HomeActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  /* 👇 isso resolve o problema */
  max-width: 32rem;        /* controla o respiro lateral */
  margin: 0 auto;
`;