import { CenteredSection, LogoLinkToHome, StyledHeader } from "./Header.styles";

import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { useAppContext } from "../../context/App.context";
import { useHomeLocation } from "../../hooks/useHomeLocation";
import { Text } from "../../utils/Text.styles";
import Button from "../UI/layout/button/Button";
import AuthButton from "../authButton/AuthButton";
import Settings from "../settings/Settings";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {
  const { toggleMenuSize } = useAppContext();
  console.log("Header");

  return (
    <StyledHeader>
      <CenteredSection cssProps={{ gap: "1rem" }}>
        <Button // toggle menu icon
          className={`${!useHomeLocation() && "disabled"} menu`}
          onClick={() => {
            toggleMenuSize();
          }}
        >
          <SlMenu size={17} />
        </Button>
        <LogoLinkToHome to={"/"}>
          <FaYoutube color="#FF0000" size={30} />
          <Text className="logo">Youtube</Text>
        </LogoLinkToHome>
      </CenteredSection>
      <CenteredSection>
        <SearchBar />
      </CenteredSection>
      <CenteredSection cssProps={{ gap: "0.85rem", position: "relative" }}>
        <Button
          data-tooltip-id="settings"
          data-tooltip-content="Settings"
          $showComponentOnClick={<Settings />}
        >
          <CgMoreVerticalAlt size={21} />
        </Button>

        <AuthButton />
      </CenteredSection>
    </StyledHeader>
  );
};

export default Header;
