import "styled-components";

interface ITHEME {
  background: string;
  text: string;
  grey1: string;
  authBlue: string;
  grey2: string;
  settingsBg: string;
  youtubeRed: string;
  settingsShadow: string;
  white: string;
  black: string;
  divider: string;
  grey3: string;
  backdrop: string;
}

export const darkTheme: ITHEME = {
  background: "#0F0F0F",
  text: "#fff",
  grey1: "#272727",
  authBlue: "#3DA6FF",
  grey2: "#272727",
  settingsBg: "#282828",
  youtubeRed: "#FF0000",
  settingsShadow: "#0E0E0E",
  white: "#fff",
  black: "#000",
  divider: "#272727",
  grey3: "#A9A9A9",
  backdrop: "#000",
};

export const lightTheme: ITHEME = {
  background: "#fff",
  text: "#000",
  grey1: "#272727",
  authBlue: "#3DA6FF",
  grey2: "#F2F2F2",
  settingsBg: "#fff",
  youtubeRed: "#FF00000",
  settingsShadow: "#e1e1e1",
  white: "#fff",
  black: "#000",
  divider: "#ccc",
  grey3: "#606060",
  backdrop: "#000",
};

export const THEMES = {
  dark: darkTheme,
  light: lightTheme,
};

// style-components setting for annotations
declare module "styled-components" {
  export interface DefaultTheme extends ITHEME {}
}
