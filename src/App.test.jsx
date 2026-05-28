import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("Renderiza as seções principais", () => {
    render(<App />);

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
