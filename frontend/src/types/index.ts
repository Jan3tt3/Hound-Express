export type { Guide } from "./Guide";

export interface HistoryEntry {
  id: string;
  guideId: string;
  date: string;
  oldStatus: "Pendiente" | "En tránsito" | "Entregada";
  newStatus: "Pendiente" | "En tránsito" | "Entregada";
}