export type GuideStatus = "Pendiente" | "En tránsito" | "Entregada";

export interface HistoryEntry {
  date: string;
  status: GuideStatus;
}

export interface Guide {
  id: string;
  client: string;
  origin: string;
  destination: string;
  status: GuideStatus;
  lastUpdate: string;
  history: HistoryEntry[];
}
