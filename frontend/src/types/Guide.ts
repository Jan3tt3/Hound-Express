
export type GuideStatus =
  | "Pendiente"
  | "Activa"
  | "En tránsito"
  | "Entregada";

export interface Guide {
  id: string;
  client: string;
  origin: string;
  destination: string;
  status: GuideStatus;
  createdAt: string;
}
