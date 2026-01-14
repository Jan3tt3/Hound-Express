// src/store/guidesSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Guide } from "../types/Guide";

interface GuidesState {
  guides: Guide[];
  selectedGuideId: string | null;
}


const initialState: GuidesState = {
  guides: [],
  selectedGuideId: null,
};


const guidesSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<Guide>) => {
      state.guides.push(action.payload);
    },
    updateGuideStatus: (
      state,
      action: PayloadAction<{ id: string; status: Guide["status"] }>
    ) => {
      const guide = state.guides.find(g => g.id === action.payload.id);
      if (guide) {
        guide.status = action.payload.status;
      }
    },
    selectGuide: (state, action: PayloadAction<string | null>) => {
  state.selectedGuideId = action.payload;
  },
  clearSelectedGuide: (state) => {
      state.selectedGuideId = null;
    },
  },
});

export const { addGuide, updateGuideStatus, selectGuide,clearSelectedGuide } = guidesSlice.actions;
export default guidesSlice.reducer;
