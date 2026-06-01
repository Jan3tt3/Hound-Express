import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../services/api";
import type { Guide } from "../types/Guide";


interface GuidesState {
  guides: Guide[];
  selectedGuideId: number | null;
  loading: boolean;
  error: string | null;
}


const initialState: GuidesState = {
  guides: [],
  selectedGuideId: null,
  loading: false,
  error: null,
};


export const fetchGuides = createAsyncThunk(
  "guides/fetchGuides",async () => {
    const response = await api.get("guides/");
    return response.data;
  }
);


export const updateGuideStatusAsync = createAsyncThunk(
  "guides/updateGuideStatusAsync",async ({
    id,
    currentStatus,
  }: {
    id: number;
    currentStatus: Guide["currentStatus"];
  }) => {

    const response = await api.patch(
      `guides/${id}/`,
      {
        currentStatus,
      }
    );
    return response.data;
  }
);


const guidesSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {

    selectGuide: (
      state,
      action: PayloadAction<number | null>
    ) => {

      state.selectedGuideId = action.payload;
    },
    clearSelectedGuide: (state) => {
      state.selectedGuideId = null;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchGuides.pending, (state) => {
      state.loading = true;
      })

      .addCase(fetchGuides.fulfilled, (state, action) => {
        state.loading = false;
        state.guides = action.payload.results;
      })

      .addCase(fetchGuides.rejected, (state) => {
        state.loading = false;
        state.error = "Error cargando guías";
      })

      .addCase(deleteGuideAsync.fulfilled,(state, action) => {
        state.guides = state.guides.filter(
          guide => guide.id !== action.payload
    );
  })

      .addCase(
        updateGuideStatusAsync.fulfilled,
        (state, action) => {
          const updatedGuide = action.payload;
          const index = state.guides.findIndex(
            g => g.id === updatedGuide.id
          );

          if (index !== -1) {

            state.guides[index] = updatedGuide;
          }
        }
      );
  },
});

export const deleteGuideAsync = createAsyncThunk(
  "guides/deleteGuideAsync",
  async (id: number) => {
    await api.delete(`guides/${id}/`);
    return id;
  }
);


export const {
  selectGuide,
  clearSelectedGuide,
} = guidesSlice.actions;

export default guidesSlice.reducer;