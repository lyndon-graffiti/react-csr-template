import { PartRoutes, Routes } from "./routes";

import Home from "@/pages/home";
import About from "@/pages/about";

export const routes: RouteConfig[] = [
  {
    name: "首页",
    path: Routes.Home,
    key: Routes.Home,
    isMenu: true,
    component: <Home />,
  },
  {
    name: "关于",
    path: Routes.About,
    key: Routes.About,
    isMenu: true,
    component: <About />,
  },
  {
    name: "爬虫清洗",
    path: PartRoutes.Crawler,
    key: PartRoutes.Crawler,
    isMenu: true,
    children: [
      {
        name: "清洗资源列表",
        path: PartRoutes.CleaningList,
        key: PartRoutes.CleaningList,
        isMenu: true,
        component: undefined,
      },
    ],
  },
];
