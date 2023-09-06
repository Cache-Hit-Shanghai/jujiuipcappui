"use client";

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({ palette: { mode: "light" } });

export function MuiThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
