import "font-awesome/css/font-awesome.min.css";
import "./theme.scss";
import "./assets/css/react-sidenav.css";
import "fontsource-roboto";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#00adb5",
      },
      text: {
        primary: "#fff",
        secondary: "#444",
        disabled: "##fff",
        hint: "#fff",
      },
      background: {
        paper: "#0d161c",
        default: "#0d161c",
      },
    },
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
