import { render, screen } from "@testing-library/react";
import Areas from "./Areas";
import { describe, it, expect } from "vitest";

describe("Areas", () => {
  it("Renderiza o título e os cards de áreas de atuação", () => {
    render(<Areas />);

    expect(
      screen.getByRole("heading", { name: /áreas de atuação/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: /direito civil/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: /direito trabalhista/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: /direito empresarial/i })[0]
    ).toBeInTheDocument();
  });
});
