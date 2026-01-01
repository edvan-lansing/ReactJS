import React from "react";
import { DotsRow, Dot } from "./styles";

/**
 * StepDots - visual indicator for multi-step flows.
 * Props:
 * - total: number of steps (default 4)
 * - current: current step (1-based) (default 1)
 * - size: dot size (default 10px)
 * - gap: spacing between dots (default 0.5rem)
 * - activeColor / inactiveColor: override colors
 * - inactiveOpacity: opacity for inactive dots
 * - ariaLabel: accessible label text
 */
export function StepDots({
  total = 4,
  current = 1,
  size = "10px",
  gap = "0.5rem",
  activeColor,
  inactiveColor,
  inactiveOpacity = 0.75,
  ariaLabel,
  borderWidth,
}) {
  const items = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <DotsRow gap={gap} aria-label={ariaLabel || `Etapa ${current} de ${total}`}>
      {items.map((n) => (
        <Dot
          key={n}
          active={n === current}
          size={size}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          inactiveOpacity={inactiveOpacity}
          borderWidth={borderWidth}
        />
      ))}
    </DotsRow>
  );
}

export default StepDots;
