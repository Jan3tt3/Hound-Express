import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { clearSelectedGuide } from "../../store/guideSlice";
import {
  Overlay,
  Modal,
  CloseButton,
  Timeline,
  TimelineItem,
  StatusBadge,
  DateText,
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

  const guideHistory = history
    .filter((h) => h.guideId === selectedGuideId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={() => dispatch(clearSelectedGuide())}
    >
      <Modal onClick={(e) => e.stopPropagation()}>
        
        <CloseButton
          onClick={() => dispatch(clearSelectedGuide())}
          aria-label="Cerrar historial"
        >
          ✖
        </CloseButton>

        <h2 id="modal-title">Historial de la guía</h2>

        {guideHistory.length === 0 ? (
          <p>No hay historial para esta guía</p>
        ) : (
          <Timeline>
            {guideHistory.map((entry) => (
              <TimelineItem key={entry.id}>
                
                <DateText>{entry.date}</DateText>

                <div>
                  <StatusBadge status={entry.oldStatus}>
                    {entry.oldStatus}
                  </StatusBadge>

                  <span style={{ margin: "0 8px" }}>→</span>

                  <StatusBadge status={entry.newStatus}>
                    {entry.newStatus}
                  </StatusBadge>
                </div>

              </TimelineItem>
            ))}
          </Timeline>
        )}
      </Modal>
    </Overlay>
  );
}