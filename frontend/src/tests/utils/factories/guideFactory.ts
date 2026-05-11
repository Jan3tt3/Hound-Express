import type { Guide } from "../../../types/Guide";


export const createMockGuide = (overrides: Partial<Guide> = {}): Guide => ({
  id: crypto.randomUUID(),
  client: "Cliente Test",
  origin: "CDMX",
  destination: "Monterrey",
  status: "Pendiente",
  createdAt: new Date().toISOString(),
  ...overrides,
});