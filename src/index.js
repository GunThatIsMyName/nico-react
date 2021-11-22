import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme={
  backgroundColor:"#111",
  textColor:"whiteSmoke"
}
const lightTheme={
  backgroundColor:"whiteSmoke",
  textColor:"#111"
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
