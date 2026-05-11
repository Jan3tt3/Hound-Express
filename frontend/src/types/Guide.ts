export type GuideStatus =
  | "Pendiente"
  | "En tránsito"
  | "Entregada";

export interface Guide {
  id: string;
  client: string;
  origin: string;
  destination: string;
  status: GuideStatus;
  createdAt: string;
  lastUpdate: string;
  history: any[];
}