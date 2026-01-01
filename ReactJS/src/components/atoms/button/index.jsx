
// Componente Button: botão customizável e responsivo, aceita ícone, cor do token, largura total e outros props
import React from "react";
import { StyledButton } from './styles';


export const Button = ({
  children,
  icon,
  iconPosition = "left",
  fullWidth = false,
  color,
  variant,
  size = "medium",
  ariaLabel,
  ...props
}) => (
  <StyledButton
    $fullWidth={fullWidth}
    $color={color}
    $variant={variant}
    $size={size}
    aria-label={ariaLabel}
    {...props}
  >
    {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
    {children && <span className="label">{children}</span>}
    {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
  </StyledButton>
);
