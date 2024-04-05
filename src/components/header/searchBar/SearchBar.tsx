import { useEffect, useState } from "preact/hooks";
import { FaMicrophone } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useAppContext } from "../../../context/App.context";
import Button from "../../UI/layout/button/Button";
import { StyledSearchBar } from "./SearchBar.styles";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");

  const { text, fetchVideos } = useAppContext();

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setSearchText(transcript);
  }, [transcript]);

  return (
    <StyledSearchBar>
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
      <Button
        data-tooltip-id="search"
        data-tooltip-content={text.search}
        onClick={() => fetchVideos(searchText)}
      >
        <LuSearch />
      </Button>
      {!browserSupportsSpeechRecognition ? (
        <span>Browser doesn't support speech recognition.</span>
      ) : (
        <Button
          data-tooltip-id="voiceSearch"
          data-tooltip-content={text.voiceSearch}
          onClick={() =>
            listening
              ? SpeechRecognition.stopListening()
              : SpeechRecognition.startListening()
          }
          $showBackground
          className={listening ? "listening" : ""}
        >
          <FaMicrophone size={19} />
        </Button>
      )}
    </StyledSearchBar>
  );
};

export default SearchBar;
