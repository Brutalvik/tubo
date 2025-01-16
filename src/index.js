import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./index.css";

const node = document.getElementById("root");
const root = createRoot(node);
const app = (
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </NextUIProvider>
    </Provider>
  </StrictMode>
);
root.render(app);
