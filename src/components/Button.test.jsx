import { render, screen } from "@testing-library/react";
import { expect} from 'vitest';

import Button from "./Button";
import { describe, it } from "vitest";

describe("Button", () => {
  it("Renderiza o texto recebido via props ", () => {
    render(<Button text="Agende uma consulta" />);

    expect(
      screen.getByRole("button", { name: "Agende uma consulta" })
    ).toBeInTheDocument();
  });
});
