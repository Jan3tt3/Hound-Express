import { Overlay, Modal, Button } from "./HistoryModal.styles";
import type { Guide } from "../../types/Guide";
import type { HistoryEntry } from "../../types/HistoryEntry";

interface Props {
  guide: Guide;
  history: HistoryEntry[];
  onClose: () => void;
}

export default function HistoryModal({ guide, history, onClose }: Props) {
  const filteredHistory = history.filter(
    (entry) => entry.guideId === guide.id
  );

  return (
    <Overlay>
      <Modal>
        <h2>Historial de la guía</h2>
        <p><strong>ID:</strong> {guide.id}</p>
        <p><strong>Cliente:</strong> {guide.client}</p>

        {filteredHistory.length === 0 ? (
          <p>No hay historial disponible</p>
        ) : (
          <ul>
            {filteredHistory.map((entry) => (
              <li key={entry.id}>
                <strong>{entry.date}</strong><br />
                {entry.oldStatus} → {entry.newStatus}
              </li>
            ))}
          </ul>
        )}

        <Button onClick={onClose}>Cerrar</Button>
      </Modal>
    </Overlay>
  );
}
