import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
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
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NextThemesProvider>
      </HeroUIProvider>
    </Provider>
  </StrictMode>
);
root.render(app);
