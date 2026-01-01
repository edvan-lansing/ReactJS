import React from "react";
import { Button, Text } from "../../atoms";
import { Group } from "./styles";

export const ButtonGroup = ({
  direction = "row",
  firstLabel = "primary",
  secondLabel,
  firstProps = {},
  secondProps = {},
  firstColor = "",
  secondColor = "",
  firstVariant,
  secondVariant,
  firstAriaLabel,
  secondAriaLabel,
  size = "medium",
  labelSize = "1em",
  labelWeight = "bold",
  labelColor = "textDark",
  spaceBetween = false,
  mobileLayout = "stack", // "stack" | "swap"
  margin,
  padding,
  onFirstClick,
  onSecondClick,
}) => {
  const hasSecond = Boolean(secondLabel);

  return (
    <Group
      $direction={direction}
      $spaceBetween={spaceBetween}
      $single={!hasSecond}
      $mobileLayout={mobileLayout}
      $margin={margin}
      $padding={padding}
    >
      <Button
        {...firstProps}
        color={firstColor}
        variant={firstVariant}
        size={size}
        ariaLabel={firstAriaLabel}
        onClick={onFirstClick}
      >
        <Text size={labelSize} weight={labelWeight} color={labelColor}>
          {firstLabel}
        </Text>
      </Button>

      {hasSecond && (
        <Button
          {...secondProps}
          color={secondColor}
          variant={secondVariant}
          size={size}
          ariaLabel={secondAriaLabel}
          onClick={onSecondClick}
        >
          <Text size={labelSize} weight={labelWeight} color={labelColor}>
            {secondLabel}
          </Text>
        </Button>
      )}
    </Group>
  );
};
