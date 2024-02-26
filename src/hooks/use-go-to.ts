import { Routes } from "@/routers/routes";
import { useNavigate } from "react-router-dom";

export const useGoTo = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const gotoHome = () => {
    navigate(Routes.Home, {
      state: {
        search: "pageId=home",
      },
    });
  };

  const gotoAbout = () => {
    navigate(Routes.About);
  };

  const gotoCrawlerCleaningList = () => {
    navigate(Routes.CrawlerCleaningList);
  };

  return {
    goBack,
    gotoHome,
    gotoAbout,
    gotoCrawlerCleaningList,
  };
};
