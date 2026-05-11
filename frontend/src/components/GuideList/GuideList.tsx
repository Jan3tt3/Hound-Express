import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import {
  GuideCard,
  ListContainer,
  StatusBadge,
  StatusSelect,
  Actions,
  ActionButton,
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
    return (
      <section aria-live="polite">
        <p>No hay guías registradas</p>
      </section>
    );
  }

  return (
    <ListContainer as="section" aria-labelledby="guide-list-title">
      <h2 id="guide-list-title">Lista de guías</h2>

      <ul>
        {guides.map((guide) => (
          <GuideCard as="li" key={guide.id}>
            <article aria-labelledby={`guide-${guide.id}`}>
              
              {/* Título */}
              <h3 id={`guide-${guide.id}`}>
                Guía de {guide.client}
              </h3>

              {/* Estado */}
              <StatusBadge
                status={guide.status}
                aria-label={`Estado actual: ${guide.status}`}
              >
                {guide.status}
              </StatusBadge>

              {/* Información */}
              <div>
                <p><strong>Cliente:</strong> {guide.client}</p>
                <p><strong>Origen:</strong> {guide.origin}</p>
                <p><strong>Destino:</strong> {guide.destination}</p>
              </div>

              {/* Acciones */}
              <Actions>
                <ActionButton
                  onClick={() => dispatch(selectGuide(guide.id))}
                  aria-label={`Ver historial de la guía de ${guide.client}`}
                >
                  Ver historial
                </ActionButton>
              </Actions>

              {/* Cambio de estado */}
              <label htmlFor={`status-${guide.id}`}>
                Cambiar estado
              </label>

              <StatusSelect
                id={`status-${guide.id}`}
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
                <option value="Pendiente">Pendiente</option>
                <option value="En tránsito">En tránsito</option>
                <option value="Entregada">Entregada</option>
              </StatusSelect>

            </article>
          </GuideCard>
        ))}
      </ul>
    </ListContainer>
  );
}