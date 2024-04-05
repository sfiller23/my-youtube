import { useLocation } from "react-router-dom";

export const useHomeLocation = (): boolean => {
  const { pathname } = useLocation();

  const isHomePath = pathname.length === 1;

  if (isHomePath) {
    document.title = "Youtube";
  }
  return isHomePath;
};
