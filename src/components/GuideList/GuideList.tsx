import { List, Card, Button } from "./GuideList.styles";
import type { Guide } from "../../types/Guide";

interface Props {
  guides: Guide[];
  onUpdateStatus: (id: string, status: Guide["status"]) => void;
  onShowHistory: (guide: Guide) => void;
}

export default function GuideList({
  guides,
  onUpdateStatus,
  onShowHistory,
}: Props) {
  return (
    <List>
      <h3>Lista de guías</h3>

      {guides.length === 0 && <p>No hay guías registradas</p>}

      {guides.map((guide) => (
        <Card key={guide.id}>
          <p>
            <strong>Cliente:</strong> {guide.client}
          </p>
          <p>
            <strong>Origen:</strong> {guide.origin}
          </p>
          <p>
            <strong>Destino:</strong> {guide.destination}
          </p>
          <p>
            <strong>Estado:</strong> {guide.status}
          </p>

          <div>
            <Button
              onClick={() => onUpdateStatus(guide.id, "En tránsito")}
            >
              En tránsito
            </Button>

            <Button
              onClick={() => onUpdateStatus(guide.id, "Entregada")}
            >
              Entregar
            </Button>

            <Button onClick={() => onShowHistory(guide)}>
              Ver historial
            </Button>
          </div>
        </Card>
      ))}
    </List>
  );
}
