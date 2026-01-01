import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ButtonGroup } from "./index.jsx";

describe("ButtonGroup", () => {
  it("mostra ambos os botões quando secondLabel é fornecido", () => {
    const onFirst = vi.fn();
    const onSecond = vi.fn();

    render(
      <ButtonGroup
        firstLabel="Salvar"
        secondLabel="Cancelar"
        onFirstClick={onFirst}
        onSecondClick={onSecond}
      />
    );

    fireEvent.click(screen.getByText("Salvar"));
    fireEvent.click(screen.getByText("Cancelar"));

    expect(onFirst).toHaveBeenCalledTimes(1);
    expect(onSecond).toHaveBeenCalledTimes(1);
  });

  it("renderiza apenas o primeiro botão quando não há secondLabel", () => {
    const onFirst = vi.fn();

    render(<ButtonGroup firstLabel="Só um" onFirstClick={onFirst} />);

    fireEvent.click(screen.getByText("Só um"));

    expect(onFirst).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Cancelar")).toBeNull();
  });
});
