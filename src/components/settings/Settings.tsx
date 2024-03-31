import { GoMoon } from "react-icons/go";
import { HiLanguage } from "react-icons/hi2";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { Setting, StyledSettings } from "./Settings.styles";

const Settings = () => {
  const { theme, text, language, toggleTheme, toggleLanguage } =
    useAppContext();
  const SETTINGS = [
    {
      label: text.language,
      icon: <HiLanguage size={23} />,
      value: text[language === "english" ? "french" : "english"],
      onClick: () => toggleLanguage(),
    },
    {
      label: text.appearance,
      icon: <GoMoon size={23} />,
      value: text[theme === "dark" ? "light" : "dark"],
      onClick: () => toggleTheme(),
    },
  ];
  return (
    <StyledSettings>
      {SETTINGS.map((setting) => (
        <Setting key={setting.label} onClick={setting.onClick}>
          {setting.icon}
          <Text>{`${setting.label} : ${setting.value}`}</Text>
        </Setting>
      ))}
    </StyledSettings>
  );
};

export default Settings;
