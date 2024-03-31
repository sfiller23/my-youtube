import { Video } from "pexels";
import { useState } from "preact/hooks";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import ShortsVideoItem from "../shortsVideoItem/ShortsVideoItem";
import {
  MoreLessButton,
  MoreLessContainer,
  ShortsVideosContainer,
  StyledVideoShorts,
  VideoShortsHeading,
} from "./VideoShorts.styles";

interface IVideoShortsProps {
  videos: Video[];
}

const VideoShorts = ({ videos }: IVideoShortsProps) => {
  const [showLess, setShowLess] = useState<boolean>(false);

  const videoList = showLess ? videos.slice(0, videos.length / 2) : videos;
  const { text } = useAppContext();
  return (
    <StyledVideoShorts>
      <VideoShortsHeading>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortsHeading>
      <ShortsVideosContainer>
        {videoList.map((video, index) => (
          <ShortsVideoItem key={index} video={video} />
        ))}
      </ShortsVideosContainer>
      <MoreLessContainer>
        <MoreLessButton
          onClick={() => {
            setShowLess((s) => !s);
          }}
        >
          <Text>{showLess ? text.showMore : text.showLess}</Text>
          {showLess ? (
            //@ts-ignore
            <IoIosArrowDown className="icon" size={20} />
          ) : (
            //@ts-ignore
            <IoIosArrowUp className="icon" size={20} />
          )}
        </MoreLessButton>
      </MoreLessContainer>
    </StyledVideoShorts>
  );
};

export default VideoShorts;
