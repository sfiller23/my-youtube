import { Route, Routes } from "react-router-dom";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./app.styles";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import WatchVideoContents from "./components/watchVideoContents/WatchVideoContents";
import { useAppContext } from "./context/App.context";
import Meta from "./utils/Meta";
import ToolTips from "./utils/ToolTips";
import { THEMES } from "./utils/theme";

export function App() {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <AppContainer>
        <ToolTips />
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/:id" element={<WatchVideoContents />} />
        </Routes>
        <Meta />
      </AppContainer>
    </ThemeProvider>
  );
}
