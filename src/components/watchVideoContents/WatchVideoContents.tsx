import { faker } from "@faker-js/faker";
import { useEffect } from "preact/hooks";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { PiListPlusFill } from "react-icons/pi";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";
import Categories from "../categories/Categories";
import { LoadingBackdrop } from "../content/Content.styles";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import { RegularVideoPic } from "../regularVideoItem/RegularVideoItem.styles";
import {
  DetailsActionButton,
  DetailsActions,
  MoreVideosContainer,
  StyledWatchVideoContents,
  SubscribeButton,
  UserAccount,
  VideoDescription,
  VideoDetails,
  VideoDetailsActions,
  VideoDetailsInfo,
  VideoScreen,
  WatchVideoContainer,
} from "./WatchVideoContents.styles";

const WatchVideoContents = () => {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos, text } =
    useAppContext();
  const { id } = useParams();

  document.title = getTitle(videoToWatchData?.url ? videoToWatchData.url : "");

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
  }, [id]);

  if (isFetchingVideos) {
    return <LoadingBackdrop />;
  }

  return (
    <StyledWatchVideoContents>
      <WatchVideoContainer>
        <VideoScreen>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            volume={1}
            muted={false}
            playing={true}
            url={videoToWatchData?.video_files[0].link}
          />
        </VideoScreen>
        <VideoDetails>
          <Text className="videoScreenTitle">{document.title}</Text>
          <VideoDetailsActions>
            <VideoDetailsInfo>
              <RegularVideoPic>
                <img src={videoToWatchData?.image} alt="profile pic" />
              </RegularVideoPic>
              <UserAccount>
                <Text className="name">{videoToWatchData?.user.name}</Text>
                <Text className="subscribers">
                  {videoToWatchData?.duration}k {text.subscribers}
                </Text>
              </UserAccount>
              <SubscribeButton>{text.subscribers}</SubscribeButton>
            </VideoDetailsInfo>
            <DetailsActions>
              <DetailsActionButton>
                <>
                  <TiThumbsUp size={21} />
                  <Text>{videoToWatchData?.duration}</Text>
                </>
                <span className="divider">&nbsp;</span>
                <TiThumbsDown size={21} />
                <IoArrowRedoOutline size={21} />
              </DetailsActionButton>
              <DetailsActionButton>
                <IoArrowRedoOutline size={21} />
                <Text>{text.share}</Text>
              </DetailsActionButton>
              <DetailsActionButton>
                <PiListPlusFill size={21} />
                <Text>{text.save}</Text>
              </DetailsActionButton>
              <DetailsActionButton>
                <HiDotsHorizontal size={21} />
              </DetailsActionButton>
            </DetailsActions>
          </VideoDetailsActions>
          <VideoDescription>
            <Text>{faker.lorem.paragraphs(5)}</Text>
          </VideoDescription>
        </VideoDetails>
      </WatchVideoContainer>

      <MoreVideosContainer>
        <Categories />
        {videos.map((video, index) => (
          <RegularVideoItem smallView key={index} video={video} />
        ))}
      </MoreVideosContainer>
    </StyledWatchVideoContents>
  );
};

export default WatchVideoContents;
