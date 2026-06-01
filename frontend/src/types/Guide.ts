export type GuideStatus =
  | "Pendiente"
  | "En tránsito"
  | "Entregada";


export interface GuideHistory {

  id: number;

  status: GuideStatus;

  timestamp: string;

  updatedBy: string;
}


export interface Guide  {

  id: number;

  trackingNumber: string;

  client: number;

  origin: string;

  destination: string;

  createdAt: string;

  updatedAt: string;

  currentStatus: GuideStatus;

  status_history: GuideHistory[];
}