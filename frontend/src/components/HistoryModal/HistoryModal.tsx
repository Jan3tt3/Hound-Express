import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { clearSelectedGuide } from "../../store/guideSlice";
import {
  Overlay,
  Modal,
  CloseButton,
} from "./HistoryModal.styles";

export default function HistoryModal() {
  const dispatch = useDispatch();

  const selectedGuideId = useSelector(
    (state: RootState) => state.guides.selectedGuideId
  );

  const history = useSelector(
    (state: RootState) => state.history.entries
  );

  if (!selectedGuideId) return null;

  const guideHistory = history.filter(
    (h) => h.guideId === selectedGuideId
  );

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <Modal>
        {/* Botón cerrar */}
        <CloseButton
          onClick={() => dispatch(clearSelectedGuide())}
          aria-label="Cerrar historial"
        >
          ✖
        </CloseButton>

        {/* Título */}
        <h2 id="modal-title">Historial de la guía</h2>

        {/* Contenido */}
        {guideHistory.length === 0 ? (
          <p aria-live="polite">
            No hay historial para esta guía
          </p>
        ) : (
          <ul>
            {guideHistory.map((entry) => (
              <li key={entry.id}>
                <article>
                  <p>
                    <strong>{entry.date}</strong>
                  </p>
                  <p>
                    Estado: {entry.oldStatus} → {entry.newStatus}
                  </p>
                  <hr />
                </article>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </Overlay>
  );
}