import { PartRoutes, Routes } from "./routes";

import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/404";

export const routes: RouteConfig[] = [
  {
    path: Routes.Default,
    key: Routes.Default,
    element: <Home />,
  },
  {
    path: Routes.NotFound,
    key: Routes.NotFound,
    element: <NotFound />,
  },
  {
    name: "首页",
    path: Routes.Home,
    key: Routes.Home,
    element: <Home />,
  },
  {
    name: "关于",
    path: Routes.About,
    key: Routes.About,
    element: <About />,
  },
  {
    name: "爬虫清洗",
    path: PartRoutes.Crawler,
    key: PartRoutes.Crawler,
    children: [
      {
        name: "清洗资源列表",
        path: PartRoutes.CleaningList,
        key: PartRoutes.CleaningList,
        element: undefined,
      },
    ],
  },
];
