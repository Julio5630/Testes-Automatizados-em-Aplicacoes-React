import { render, screen } from "@testing-library/react";
import CardArea from "./CardArea";
import { describe, it, expect } from "vitest";

describe("CardArea", () => {
  it("Renderiza o título e a descrição recebidos via props", () => {
    render(
      <CardArea titulo="Título do Card" descricao="Descrição do Card" />
    );

    expect(
      screen.getByRole("heading", { name: "Título do Card" })
    ).toBeInTheDocument();
    expect(screen.getByText("Descrição do Card")).toBeInTheDocument();
  });
});
