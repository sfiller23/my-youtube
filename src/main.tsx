import { render } from "preact";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app.tsx";
import { AppContextProvider } from "./context/App.context.tsx";
import "./index.css";
import { store } from "./store/store.ts";

render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")!
);
