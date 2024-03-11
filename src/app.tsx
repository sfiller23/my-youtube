import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./app.styles";
import { useAppContext } from "./context/App.context";
import { THEMES } from "./utils/theme";

export function App() {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <AppContainer>Hello React with TS</AppContainer>
    </ThemeProvider>
  );
}
