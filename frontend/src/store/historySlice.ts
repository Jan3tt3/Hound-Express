import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HistoryEntry } from "../types/HistoryEntry";

interface HistoryState {
  entries: HistoryEntry[];
}

const initialState: HistoryState = {
  entries: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryEntry: (state, action: PayloadAction<HistoryEntry>) => {
      state.entries.unshift(action.payload);
    },

    clearHistory: (state) => {
      state.entries = [];
    },
  },
});

export const { addHistoryEntry, clearHistory } = historySlice.actions;
export default historySlice.reducer;
