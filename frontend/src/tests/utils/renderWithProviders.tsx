// src/tests/utils/renderWithProviders.tsx
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import guidesReducer from "../../store/guideSlice";

// ✅ Tema COMPLETO para tests
const theme = {
  colors: {
    white: "#fff",
    primary: "#2563eb",
    card: "#f9fafb",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
};

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
