import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./index.jsx";

describe("Button", () => {
  it("renderiza o rótulo", () => {
    render(<Button>Salvar</Button>);
    expect(screen.getByText("Salvar")).toBeInTheDocument();
  });

  it("dispara onClick quando habilitado", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Clique</Button>);
    fireEvent.click(screen.getByText("Clique"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("não dispara onClick quando desabilitado", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Desabilitado
      </Button>
    );
    fireEvent.click(screen.getByText("Desabilitado"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
