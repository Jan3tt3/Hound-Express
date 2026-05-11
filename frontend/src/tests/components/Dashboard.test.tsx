import { renderWithProviders } from "../utils/renderWithProviders";
import Dashboard from "../../components/Dashboard/Dashboard";
import { createMockGuide } from "../utils/factories/guideFactory";


test("muestra el total de guías", () => {
  const guides = [
    createMockGuide(),
    createMockGuide(),
  ];

  const { getByText } = renderWithProviders(
    <Dashboard guides={guides} />
  );

  expect(getByText(/Total/i)).toBeInTheDocument();
});