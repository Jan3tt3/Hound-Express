export interface HistoryEntry {
  id: string;
  guideId: string;
  date: string;
  oldStatus: "Activa" | "En tránsito" | "Entregada";
  newStatus: "Activa" | "En tránsito" | "Entregada";
}
