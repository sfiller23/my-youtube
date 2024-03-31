import {
  HeaderMoreSection,
  LeftSection,
  LogoSection,
  SearchBar,
  SearchSection,
  StyledHeader,
} from "./Header.styles";

import { useEffect, useState } from "preact/hooks";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/App.context";
import { Icon } from "../../utils/Icon.styles";
import { Text } from "../../utils/Text.styles";
import AuthButton from "../authButton/AuthButton";
import Settings from "../settings/Settings";

const Header = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const { text, setSearchBarText, toggleMenuSize } = useAppContext();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { pathname } = useLocation();

  useEffect(() => {
    setSearchText(transcript);
    setSearchBarText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const isHomePath = pathname.length === 1;

  if (isHomePath) {
    document.title = "Youtube";
  }

  return (
    <StyledHeader>
      <LeftSection>
        <Icon
          className={`${!isHomePath && "disabled"} menu`}
          onClick={() => toggleMenuSize()}
        >
          <SlMenu size={17} />
        </Icon>
        <LogoSection to={"/"}>
          <FaYoutube color="#FF0000" size={30} />
          <Text className="logo">Youtube</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>
        <SearchBar>
          <input
            type="text"
            value={searchText}
            placeholder={text.search}
            onChange={(e) => {
              if (e.target) {
                setSearchText((e.target as HTMLInputElement).value);
              }
            }}
          />
          <Icon
            data-tooltip-id="search"
            data-tooltip-content={text.search}
            onClick={() => setSearchBarText(searchText)}
          >
            <LuSearch />
          </Icon>
        </SearchBar>
        <Icon
          data-tooltip-id="voiceSearch"
          data-tooltip-content={text.voiceSearch}
          onClick={() => SpeechRecognition.startListening()}
          $showBackground
          className={listening ? "listening" : ""}
        >
          <FaMicrophone size={19} />
        </Icon>
      </SearchSection>
      <HeaderMoreSection>
        <Icon
          data-tooltip-id="settings"
          data-tooltip-content="Settings"
          onClick={() => setShowSettings((s) => !s)}
        >
          <CgMoreVerticalAlt size={21} />
        </Icon>
        <AuthButton />
        {showSettings && <Settings />}
      </HeaderMoreSection>
    </StyledHeader>
  );
};

export default Header;
