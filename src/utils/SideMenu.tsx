//the tsx ending is to allow the use of react-icons here
import { BiMoviePlay } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { CgFlag, CgMediaLive } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { GiHanger, GiTrophyCup } from "react-icons/gi";
import { IoMdAddCircleOutline, IoMdHelpCircleOutline } from "react-icons/io";
import { LiaFireAltSolid } from "react-icons/lia";
import {
  MdHistory,
  MdHome,
  MdOutlineFeedback,
  MdPodcasts,
} from "react-icons/md";
import {
  PiGearBold,
  PiLightbulbBold,
  PiMonitorPlayFill,
  PiMusicNoteBold,
} from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import {
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

export const MENU_SMALL = [
  { name: "home", icon: <MdHome /> },
  { name: "shorts", icon: <SiYoutubeshorts /> },
  { name: "subscriptions", icon: <BsCollectionPlay /> },
  { name: "you", icon: <PiMonitorPlayFill /> },
  { name: "history", icon: <MdHistory /> },
];

export const MENU_LARGE = [
  {
    title: "",
    list: [
      { name: "home", icon: <MdHome /> },
      { name: "shorts", icon: <SiYoutubeshorts /> },
      { name: "subscriptions", icon: <BsCollectionPlay /> },
    ],
  },
  {
    title: "",
    list: [
      { name: "you", icon: <PiMonitorPlayFill /> },
      { name: "history", icon: <MdHistory /> },
    ],
  },
  {
    title: "explore",
    list: [
      { name: "trending", icon: <LiaFireAltSolid /> },
      { name: "music", icon: <PiMusicNoteBold /> },
      { name: "moviesTv", icon: <BiMoviePlay /> },
      { name: "live", icon: <CgMediaLive /> },
      { name: "gaming", icon: <SiYoutubegaming /> },
      { name: "news", icon: <RiNewspaperLine /> },
      { name: "sport", icon: <GiTrophyCup /> },
      { name: "learning", icon: <PiLightbulbBold /> },
      { name: "fashionBeauty", icon: <GiHanger /> },
      { name: "podcasts", icon: <MdPodcasts /> },
    ],
  },
  {
    title: "",
    list: [{ name: "browseChannels", icon: <IoMdAddCircleOutline /> }],
  },
  {
    title: "moreFromYoutube",
    list: [
      { name: "youtubePremium", icon: <FaYoutube color="red" /> },
      { name: "youtubeMusic", icon: <SiYoutubemusic color="red" /> },
      { name: "youtubeKids", icon: <TbBrandYoutubeKids color="red" /> },
    ],
  },
  {
    title: "",
    list: [
      { name: "settings", icon: <PiGearBold /> },
      { name: "reportHistory", icon: <CgFlag /> },
      { name: "help", icon: <IoMdHelpCircleOutline /> },
      { name: "sendFeedback", icon: <MdOutlineFeedback /> },
    ],
  },
];
