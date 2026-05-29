import { render, screen } from "@testing-library/react";
import Formulario from "../sections/Formulario";
import { describe, it, expect } from "vitest";

describe("Formulario", () => {
  it("Renderiza todos os campos do formulário e o botão de envio", () => {
    render(<Formulario />);

    expect(screen.getByRole("heading", { name: /agende uma consulta/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/telefone/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });
});
