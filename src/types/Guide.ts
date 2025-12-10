export interface Guide {
  id: string;
  client: string;
  origin: string;
  destination: string;
  status: "Activa" | "En tránsito" | "Entregada";
  createdAt: string;
}

/*export interface HistoryEntry {
  date: string
  status: string
}

export interface Guide {
  id: string
  client: string
  origin: string
  destination: string
  status: string
  createdAt: string
  history: HistoryEntry[]
}

*/