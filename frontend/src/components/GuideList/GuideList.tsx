import { useEffect } from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import type {
  RootState,
  AppDispatch,
} from "../../store/store";

import {
  GuideCard,
  ListContainer,
  StatusBadge,
  StatusSelect,
  Actions,
  ActionButton,
} from "./GuideList.styles";

import {
  selectGuide,
  fetchGuides,
  updateGuideStatusAsync,
  deleteGuideAsync,
} from "../../store/guideSlice";

import type { Guide } from "../../types/Guide";


export default function GuideList() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    guides,
    loading,
    error,
  } = useSelector(
    (state: RootState) => state.guides
  );

  useEffect(() => {dispatch(fetchGuides());

  }, [dispatch]);


  if (loading) {
    return <p>Cargando guías...</p>;
  }


  if (error) {
    return <p>{error}</p>;
  }


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
           <article>
            <h3>Guía de {guide.client}</h3>
              <StatusBadge $status={guide.currentStatus}>
                {guide.currentStatus}
              </StatusBadge>
              <div>
                <p><strong>Tracking:</strong>
                  {" "}
                  {guide.trackingNumber}
                </p>
                <p><strong>Cliente:</strong>
                  {" "}
                  {guide.client}
                </p>
                <p><strong>Origen:</strong>
                  {" "}
                  {guide.origin}
                </p>

                <p><strong>Destino:</strong>
                  {" "}
                  {guide.destination}
                </p>
                </div>


              <Actions>
                <ActionButton onClick={() =>dispatch(selectGuide(guide.id))}>
                  Ver historial
                  </ActionButton>
                  <ActionButton onClick={() => {if (
                    window.confirm("¿Deseas eliminar esta guía?")) {
                      dispatch(deleteGuideAsync(guide.id));}
                      }}>Eliminar
                      </ActionButton>
                      </Actions>
                      <label htmlFor={`status-${guide.id}`}>
                        Cambiar estado
                        </label>


              <StatusSelect

                id={`status-${guide.id}`}

                value={guide.currentStatus}

                onChange={(e) => {

                  dispatch(
                    updateGuideStatusAsync({

                      id: guide.id,

                      currentStatus:
                        e.target.value as Guide["currentStatus"],
                    })
                  );
                }}
              >

                <option value="Pendiente">
                  Pendiente
                </option>

                <option value="En tránsito">
                  En tránsito
                </option>

                <option value="Entregada">
                  Entregada
                </option>

              </StatusSelect>

            </article>

          </GuideCard>
        ))}
      </ul>
    </ListContainer>
  );
}