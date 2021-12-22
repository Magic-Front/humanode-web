import { createTheme } from "@mui/material";
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WARNING_COLOR,
} from "./variable";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },

    warning: {
      main: WARNING_COLOR,
    },
    error: {
      main: ERROR_COLOR,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});
