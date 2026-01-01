import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    ${colors.cardPrimaryLight},
    ${colors.cardPrimaryDark}
  );
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 30.5em;
  margin: 2rem auto;
  box-shadow:
    0 30px 60px ${colors.darkOverlay},
    inset 0 1px 0 ${colors.lightOverlay};
  color: ${colors.aliceblue};
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-left: 3px solid ${colors.buttonPrimary};
  padding-left: 0.75rem;
`;

export const CardSubtitle = styled.span`
  font-size: 0.85rem;
  opacity: 0.7;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
`;
