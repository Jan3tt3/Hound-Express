import { GUIDE_STATUS } from "../../components/StatusPanel/StatusPanel";
import guidesReducer, { addGuide, updateGuideStatus } from "../../store/guideSlice";

describe("guidesSlice reducer", () => {
  test("debe agregar una guía", () => {
    const initialState = { guides: [], selectedGuideId: null };

    const newGuide = {
      id: "1",
      client: "Juan",
      origin: "CDMX",
      destination: "MTY",
      status: GUIDE_STATUS.PENDING,
      createdAt: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
      history: [],
    };

    const state = guidesReducer(initialState, addGuide(newGuide));

    expect(state.guides.length).toBe(1);
    expect(state.guides[0].client).toBe("Juan");
  });

  test("debe actualizar el estado de la guía", () => {
    const initialState = {
      guides: [
        {
          id: "1",
          client: "Juan",
          origin: "CDMX",
          destination: "MTY",
          status: GUIDE_STATUS.PENDING,
          createdAt: new Date().toISOString(),
          lastUpdate: new Date().toISOString(),
          history: [],
        },
      ],
      selectedGuideId: null,
    };

    const state = guidesReducer(
      initialState,
      updateGuideStatus({ id: "1", status: "Entregada" })
    );

    expect(state.guides[0].status).toBe("Entregada");
  });
});