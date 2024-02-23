interface RouteConfig {
  name?: string;
  // 子路由的实际路径是父路由 + 子路由拼接而成
  path: string;
  key: string;
  redirectTo?: string;
  element?: JSX.Element;
  children?: RouteConfig[];
}
