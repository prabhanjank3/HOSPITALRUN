import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import './styles.css'
import temp from 'dotenv';
import { createTheme, ThemeProvider } from "@mui/material";
temp.config()
const rootElement:any = document.getElementById("root");
const root = createRoot(rootElement);
import { MaterialUIControllerProvider } from "./context";

const theme = createTheme({
  //here you set palette, typography ect...
})
root.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
  <MaterialUIControllerProvider>
    <App />
  </MaterialUIControllerProvider>
  </Provider>
  </ThemeProvider>
);
