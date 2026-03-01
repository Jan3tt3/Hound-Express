import { configureStore } from "@reduxjs/toolkit";
import guidesReducer from "./guideSlice";
import historyReducer from "./historySlice";

export const store = configureStore({
  reducer: {
    guides: guidesReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
