import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const node = document.getElementById("root");
const root = createRoot(node);
const app = (
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  </StrictMode>
);
root.render(app);
