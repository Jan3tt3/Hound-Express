import guidesReducer, { addGuide, updateGuideStatus } from "../../store/guideSlice";
import { createMockGuide } from "../utils/factories/guideFactory";


test("addGuide agrega una guía", () => {
  const state = { guides: [], selectedGuideId: null };

  const newState = guidesReducer(
    state,
    addGuide(createMockGuide({ id: "1" }))
  );

  expect(newState.guides.length).toBe(1);
});

test("updateGuideStatus cambia estado", () => {
  const state = {
    guides: [createMockGuide({ id: "1", status: "Pendiente" })],
    selectedGuideId: null,
  };

  const newState = guidesReducer(
    state,
    updateGuideStatus({ id: "1", status: "Entregada" })
  );

  expect(newState.guides[0].status).toBe("Entregada");
});