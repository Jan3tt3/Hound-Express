import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { clearSelectedGuide, selectGuide } from "../../store/guideSlice";
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
    <Overlay>
      <Modal>
        <CloseButton onClick={() => dispatch(clearSelectedGuide())}>
          ✖
        </CloseButton>

        <h3>Historial de la guía</h3>

        {guideHistory.length === 0 && (
          <p>No hay historial para esta guía</p>
        )}

        {guideHistory.map((entry) => (
          <div key={entry.id}>
            <p>
              <strong>{entry.date}</strong>
            </p>
            <p>
              {entry.oldStatus} → {entry.newStatus}
            </p>
            <hr />
          </div>
        ))}
      </Modal>
    </Overlay>
  );
}
