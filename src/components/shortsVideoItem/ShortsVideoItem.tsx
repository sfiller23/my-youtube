import { Video } from "pexels";
import { useState } from "preact/hooks";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";
import {
  StyledShortsVideoItem,
  StyledShortsVideoThumbnail,
} from "./ShortsVideoItem.styles";

interface IVideoShortsProps {
  video: Video;
}

const ShortsVideoItem = ({ video }: IVideoShortsProps) => {
  const [playTrailer, setPlayTrailer] = useState<boolean>(false);
  const { isMenuSmall, setVideoToWatch } = useAppContext();
  const TITLE_LENGTH: number = 60;
  return (
    <StyledShortsVideoItem
      onMouseOver={() => {
        setPlayTrailer(true);
      }}
      onMouseOut={() => {
        setPlayTrailer(false);
      }}
      onClick={() => {
        setVideoToWatch(video.id);
      }}
    >
      <StyledShortsVideoThumbnail $isMenuSmall={isMenuSmall}>
        {playTrailer ? (
          <ReactPlayer
            width="100%"
            height="100%"
            controls={false}
            volume={1}
            muted={false}
            playing={playTrailer}
            url={video.video_files[0].link}
          />
        ) : (
          <img src={video.image} alt="thumbnail" />
        )}
      </StyledShortsVideoThumbnail>
      <Text className="videoItemTitle">
        {getTitle(video.url).slice(0, TITLE_LENGTH)}
        {getTitle(video.url).length > TITLE_LENGTH && "..."}
      </Text>
      <Text className="details">{video.duration}M views</Text>
    </StyledShortsVideoItem>
  );
};

export default ShortsVideoItem;
