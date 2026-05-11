// src/tests/utils/renderWithProviders.tsx
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import guidesReducer from "../../store/guideSlice";
import  theme  from "../../styles/theme";

<ThemeProvider theme={theme}>{ui}</ThemeProvider>

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { guides: guidesReducer },
      preloadedState,
    }),
  } = {}
) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>
  );
}
