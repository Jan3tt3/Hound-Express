import { screen } from "@testing-library/react";
import StatusPanel from "../../components/StatusPanel/StatusPanel";
import { renderWithProviders } from "../utils/renderWithProviders";

// Mock de estado inicial
const preloadedState = {
  guides: {
    guides: [
      { id: "1", status: "Pendiente" },
      { id: "2", status: "Activa" },
      { id: "3", status: "Entregada" },
    ],
    selectedGuideId: null,
  },
};

describe("StatusPanel", () => {
  test("muestra conteo correcto de guías por estado", () => {
    renderWithProviders(<StatusPanel />, { preloadedState });

    // Total
    expect(screen.getByText("3")).toBeInTheDocument();

    // Validar conteos por etiqueta (forma profesional)
    expect(screen.getByText("Pendientes").previousSibling).toHaveTextContent("1");
    expect(screen.getByText("Activas").previousSibling).toHaveTextContent("1");
    expect(screen.getByText("En tránsito").previousSibling).toHaveTextContent("0");
    expect(screen.getByText("Entregadas").previousSibling).toHaveTextContent("1");
  });
});
