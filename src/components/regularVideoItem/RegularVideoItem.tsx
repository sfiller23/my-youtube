import { Video } from "pexels";
import { useState } from "preact/hooks";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";
import {
  RegularVideoContent,
  RegularVideoPic,
  RegularVideoThumbnail,
  RegularVideoTitleSubTitle,
  StyledRegularVideoItem,
  Time,
} from "./RegularVideoItem.styles";

import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";

interface IRegularVideoItem {
  video: Video;
  smallView?: boolean;
}

const RegularVideoItem = ({ video, smallView }: IRegularVideoItem) => {
  const [playTrailer, setPlayTrailer] = useState<boolean>(false);
  const { isMenuSmall, setVideoToWatch } = useAppContext();
  const TITLE_LENGTH: number = 60;
  return (
    <StyledRegularVideoItem
      onMouseOver={() => {
        setPlayTrailer(true);
      }}
      onMouseOut={() => {
        setPlayTrailer(false);
      }}
      onClick={() => {
        setVideoToWatch(video.id);
      }}
      className={`${smallView && "smallView"}`}
    >
      <RegularVideoThumbnail
        className={`${smallView && "smallView"}`}
        $isMenuSmall={isMenuSmall}
      >
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
        <Time>
          <Text>
            {Math.floor(video.duration / 60)} :{Math.floor(video.duration % 60)}
          </Text>
        </Time>
      </RegularVideoThumbnail>
      <RegularVideoContent className={`${smallView && "smallView"}`}>
        <RegularVideoPic className={`${smallView && "smallView"}`}>
          <img src={video.user.url} alt="profile pic" />
        </RegularVideoPic>
        <RegularVideoTitleSubTitle className={`${smallView && "smallView"}`}>
          <Text className="videoItemTitle">
            {getTitle(video.url).slice(0, TITLE_LENGTH)}
            {getTitle(video.url).length > TITLE_LENGTH && "..."}
          </Text>
          <Text className="name">{video.user.name}</Text>
          <Text className="details">
            {video.duration}M views <span className="dot">&#9679</span> 2 hours
            ago
          </Text>
        </RegularVideoTitleSubTitle>
      </RegularVideoContent>
    </StyledRegularVideoItem>
  );
};

export default RegularVideoItem;
