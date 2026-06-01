import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

export function renderWithProviders(
  ui: React.ReactElement,
  theme: any
) {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
    </ThemeProvider>
  );
}