import React from "react";
import { StyledText } from "./styles";

export const Text = ({ children, size, color, weight, align, style = {}, ...props }) => (
  <StyledText size={size} color={color} weight={weight} align={align} style={style} {...props}>
    {children}
  </StyledText>
);
