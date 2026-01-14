import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import {
  GuideCard,
  ListContainer,
  StatusBadge,
  StatusSelect,
} from "./GuideList.styles";
import { selectGuide, updateGuideStatus } from "../../store/guideSlice";
import type { Guide } from "../../types/Guide";
import { addHistoryEntry } from "../../store/historySlice";

export default function GuideList() {
  const dispatch = useDispatch();

  const guides = useSelector(
    (state: RootState) => state.guides.guides
  );

  if (guides.length === 0) {
    return <p>No hay guías registradas</p>;
  }

  return (
    <ListContainer>
      <h3>Lista de guías</h3>

      {guides.map((guide) => (
        <GuideCard key={guide.id}>
          <div>
            <p><strong>Cliente:</strong> {guide.client}</p>
            <p><strong>Origen:</strong> {guide.origin}</p>
            <p><strong>Destino:</strong> {guide.destination}</p>

            <StatusBadge status={guide.status}>
              {guide.status}
            </StatusBadge>
            <button onClick={() => dispatch(selectGuide(guide.id))}
>
  Ver historial
</button>

          </div>

          <StatusSelect
            value={guide.status}
            onChange={(e) => {
  const newStatus = e.target.value as Guide["status"];

  dispatch(
    updateGuideStatus({
      id: guide.id,
      status: newStatus,
    })
  );

  dispatch(
    addHistoryEntry({
      id: crypto.randomUUID(),
      guideId: guide.id,
      date: new Date().toLocaleString(),
      oldStatus: guide.status,
      newStatus,
    })
  );
}}
          >
            <option value="Activa">Activa</option>
            <option value="En tránsito">En tránsito</option>
            <option value="Entregada">Entregada</option>
          </StatusSelect>
        </GuideCard>
      ))}
    </ListContainer>
  );
}
