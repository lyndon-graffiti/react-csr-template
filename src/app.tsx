import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import generateRouteView from "@/utils/routes/generate-route-view";
import Layout from "./layouts";
import "@/styles/common.css";
import "@/styles/reset.css";

const { Suspense } = React;

// 初始化路由配置和 layout
const App = () => {
  const routeViewsMap = generateRouteView();
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? "/qiankun" : "/"}>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<Layout />}>
            {routeViewsMap.map(routeView => (
              <Route key={routeView.key} path={routeView.path} element={routeView?.element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
