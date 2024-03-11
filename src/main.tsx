import { render } from "preact";
import { App } from "./app.tsx";
import { AppContextProvider } from "./context/App.context.tsx";
import "./index.css";

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("app")!
);
