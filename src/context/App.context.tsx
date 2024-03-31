import { Video, Videos, createClient } from "pexels";
import { createContext } from "preact";
import { StateUpdater, useEffect } from "preact/hooks";
import { ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeTheme } from "../store/app.slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { PEXELS_API_KEY } from "../utils/pexels";
import { ITranslations, LANGUAGE } from "../utils/translations";

interface IAppContextValue {
  theme: "light" | "dark";
  language: "english" | "french";
  toggleLanguage: () => void;
  toggleTheme: () => void;
  text: ITranslations;
  searchBarText: string;
  setSearchBarText: StateUpdater<string>;
  isMenuSmall: boolean;
  toggleMenuSize: () => void;
  activeMenuText: string;
  setActiveMenuText: StateUpdater<string>;
  activeCategory: string;
  setActiveCategory: StateUpdater<string>;
  videos: Video[];
  isFetchingVideos: boolean;
  videoToWatch: number;
  setVideoToWatch: StateUpdater<number>;
  videoToWatchData: Video | null;
  fetchVideo: (id: string) => Promise<void>;
}

const AppContext = createContext<IAppContextValue | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("No AppContext");
  }

  return appContext;
};

interface IAppContextProviderProps {
  children: ReactNode;
}

const client = createClient(PEXELS_API_KEY);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [language, setLanguage] = useState<"english" | "french">("english");
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [isMenuSmall, setIsMenuSmall] = useState<boolean>(false);
  const [activeMenuText, setActiveMenuText] = useState<string>("home");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [videos, setVideos] = useState<Video[]>([]);
  const [isFetchingVideos, setIsFetchingVideos] = useState<boolean>(false);
  const [videoToWatch, setVideoToWatch] = useState<number>(0);
  const [videoToWatchData, setVideoToWatchData] = useState<Video | null>(null);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (videoToWatch !== 0) navigate(`${videoToWatch}`);
  }, [videoToWatch]);

  useEffect(() => {
    if (activeCategory) fetchVideos(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (searchBarText) fetchVideos(searchBarText);
  }, [searchBarText]);

  const fetchVideos = async (query: string) => {
    setIsFetchingVideos(true);
    try {
      const response = await client.videos.search({ query, per_page: 44 });
      setVideos((response as Videos).videos);
    } catch (error) {}
    setIsFetchingVideos(false);
  };

  const fetchVideo = async (id: string) => {
    setIsFetchingVideos(true);
    try {
      const response = await client.videos.show({ id });
      setVideoToWatchData(response as Video);
    } catch (error) {}
    setIsFetchingVideos(false);
  };

  const toggleTheme = (): void => {
    dispatch(changeTheme());
  };

  const toggleLanguage = (): void => {
    language === "english" ? setLanguage("french") : setLanguage("english");
  };

  const toggleMenuSize = (): void => {
    setIsMenuSmall((s) => !s);
  };

  const value = {
    theme: useAppSelector((state) => state.app.theme),
    language,
    toggleLanguage,
    toggleTheme,
    text: LANGUAGE[language],
    searchBarText,
    setSearchBarText,
    isMenuSmall,
    toggleMenuSize,
    activeMenuText: LANGUAGE[language][activeMenuText as keyof ITranslations],
    setActiveMenuText,
    activeCategory,
    setActiveCategory,
    videos,
    isFetchingVideos,
    videoToWatch,
    setVideoToWatch,
    fetchVideo,
    videoToWatchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
