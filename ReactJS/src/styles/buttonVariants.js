import { colors } from "./tokens";

/**
 * Button variants configuration
 * Define estilos para cada variante (primary, secondary, outline, ghost)
 */
export const buttonVariants = {
  primary: {
    background: colors.homeButtonPrimary || "#a78bfa",
    color: "#fff",
    border: "none",
    hoverFilter: "brightness(1.1)",
    activeFilter: "brightness(0.95)",
  },
  secondary: {
    background: colors.buttonUserSecondary || "rgba(56, 189, 248, 0.9)",
    color: "#fff",
    border: "none",
    hoverFilter: "brightness(1.1)",
    activeFilter: "brightness(0.95)",
  },
  outline: {
    background: "transparent",
    color: colors.homeButtonPrimary || "#a78bfa",
    border: `2px solid ${colors.homeButtonPrimary || "#a78bfa"}`,
    hoverFilter: "none",
    hoverBg: "rgba(167, 139, 250, 0.1)",
    activeFilter: "brightness(0.95)",
  },
  ghost: {
    background: "transparent",
    color: colors.homeButtonPrimary || "#a78bfa",
    border: "none",
    hoverFilter: "none",
    hoverBg: "rgba(167, 139, 250, 0.05)",
    activeFilter: "none",
  },
};

/**
 * CSS generator para aplicar variante
 */
export function getVariantStyles(variant = "primary") {
  const v = buttonVariants[variant] || buttonVariants.primary;

  return `
    background-color: ${v.background};
    color: ${v.color};
    border: ${v.border};

    &:hover:not(:disabled) {
      ${v.hoverFilter && v.hoverFilter !== "none" ? `filter: ${v.hoverFilter};` : ""}
      ${v.hoverBg ? `background-color: ${v.hoverBg};` : ""}
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
    }

    &:active:not(:disabled) {
      ${v.activeFilter && v.activeFilter !== "none" ? `filter: ${v.activeFilter};` : ""}
      transform: translateY(0);
    }

    &:focus-visible {
      outline: 2px solid ${colors.homeButtonPrimary || "#a78bfa"};
      outline-offset: 2px;
    }
  `;
}
