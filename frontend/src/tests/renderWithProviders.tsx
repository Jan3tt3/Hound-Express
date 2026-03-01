import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import guidesReducer from "../store/guideSlice";
import { themeMock } from "./themeMock";

export function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState = {}, store = configureStore({
    reducer: { guides: guidesReducer },
    preloadedState,
  }) } = {}
) {
  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={themeMock}>
          {ui}
        </ThemeProvider>
      </Provider>
    ),
  };
}
