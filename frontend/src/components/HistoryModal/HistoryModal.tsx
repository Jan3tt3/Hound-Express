import {
  useSelector,
  useDispatch,
} from "react-redux";

import type {
  RootState,
} from "../../store/store";

import {
  clearSelectedGuide,
} from "../../store/guideSlice";

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


  const {
    selectedGuideId,
    guides,
  } = useSelector(
    (state: RootState) => state.guides
  );


  if (!selectedGuideId) {

    return null;
  }


  const selectedGuide = guides.find(
    guide => guide.id === selectedGuideId
  );


  if (!selectedGuide) {

    return null;
  }


  const history = [...selectedGuide.status_history]

    .sort(

      (a, b) =>

        new Date(b.timestamp).getTime()

        -

        new Date(a.timestamp).getTime()
    );


  return (

    <Overlay

      role="dialog"

      aria-modal="true"

      aria-labelledby="modal-title"

      onClick={() =>
        dispatch(clearSelectedGuide())
      }
    >

      <Modal
        onClick={(e) => e.stopPropagation()}
      >

        <CloseButton

          onClick={() =>
            dispatch(clearSelectedGuide())
          }

          aria-label="Cerrar historial"
        >

          ✖

        </CloseButton>


        <h2 id="modal-title">

          Historial de la guía

        </h2>


        {history.length === 0 ? (

          <p>
            No hay historial para esta guía
          </p>

        ) : (

          <Timeline>

            {history.map((entry) => (

              <TimelineItem key={entry.id}>

                <DateText>

                  {new Date(
                    entry.timestamp
                  ).toLocaleString()}

                </DateText>


                <div>

                  <StatusBadge
                    status={entry.status}
                  >

                    {entry.status}

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