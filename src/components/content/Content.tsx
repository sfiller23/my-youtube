import { useAppContext } from "../../context/App.context";
import Categories from "../categories/Categories";
import HomePageVideos from "../homePageVideos/HomePageVideos";
import { LoadingBackdrop, StyledContent } from "./Content.styles";

const Content = () => {
  const { isFetching } = useAppContext();
  return (
    <StyledContent>
      <Categories />
      <HomePageVideos></HomePageVideos>
      {isFetching && <LoadingBackdrop />}
    </StyledContent>
  );
};

export default Content;
