import { useAppContext } from "../../context/App.context";
import { MENU_LARGE, MENU_SMALL } from "../../utils/SideMenu";
import { Text } from "../../utils/Text.styles";
import { ITranslations } from "../../utils/translations";
import AuthButton from "../authButton/AuthButton";
import { LargeMenuSection, MenuItem, StyledMenu } from "./Menu.styles";

const Menu = () => {
  const { isMenuSmall, text, activeMenuText, setActiveMenuText } =
    useAppContext();

  if (isMenuSmall) {
    return (
      <StyledMenu>
        {MENU_SMALL.map((item) => (
          <MenuItem
            key={item.name}
            active={
              activeMenuText.toLowerCase() ===
              text[item.name as keyof ITranslations].toLowerCase()
            }
            className="small"
          >
            {item.icon}
            <Text>{text[item.name as keyof ITranslations]}</Text>
          </MenuItem>
        ))}
      </StyledMenu>
    );
  } else {
    return (
      <StyledMenu>
        {MENU_LARGE.map((item, index) => (
          <>
            <LargeMenuSection>
              {item.title && (
                <Text className={"title"}>
                  {text[item.title as keyof ITranslations]}
                </Text>
              )}
              {item.list.map((item) => (
                <MenuItem
                  key={item.name}
                  active={
                    activeMenuText.toLowerCase() ===
                    text[item.name as keyof ITranslations].toLowerCase()
                  }
                  className="large"
                >
                  {item.icon}
                  <Text>{text[item.name as keyof ITranslations]}</Text>
                </MenuItem>
              ))}
            </LargeMenuSection>
            {index === 1 && (
              <LargeMenuSection key={index} className="text">
                <Text>{text.signInMenuText}</Text>
                <AuthButton />
              </LargeMenuSection>
            )}
          </>
        ))}
      </StyledMenu>
    );
  }
};

export default Menu;
