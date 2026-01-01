import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === "column" ? "column" : "row"};
  gap: 1rem;
  width: ${({ $spaceBetween, $direction }) =>
    $direction === "column" || $spaceBetween ? "100%" : "fit-content"};
  max-width: 100%;
  padding: ${({ $padding }) => $padding || 0};
  margin: ${({ $margin }) => $margin || 0};
  justify-content: ${({ $spaceBetween, $single }) => {
    if ($single) return "flex-start";
    return $spaceBetween ? "space-between" : "center";
  }};
  align-items: ${({ $direction }) => ($direction === "column" ? "stretch" : "center")};

  & > button {
    min-height: 3rem;
    height: auto;
    border-radius: ${({ $direction }) => ($direction === "column" ? "0.75em" : "999rem")};
    white-space: nowrap;
    width: ${({ $direction, $spaceBetween }) => {
      if ($direction === "column") return "100%";
      if ($spaceBetween) return "auto";
      return "13rem";
    }};
    flex: ${({ $direction, $spaceBetween }) => {
      if ($direction === "column") return "1 1 auto";
      if ($spaceBetween) return "0 0 auto";
      return "0 0 13rem";
    }};
  }

  @media (max-width: 768px) {
    /* Mobile: stack vertically */
    flex-direction: ${({ $mobileLayout }) => 
      $mobileLayout === "swap" ? "column-reverse" : "column"};
    width: 100%;
    
    & > button {
      width: 100%;
      flex: 1 1 auto;
      white-space: normal;
    }
  }
`;
