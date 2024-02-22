interface RouteConfig {
  name?: string;
  // 子路由的实际路径是父路由 + 子路由拼接而成
  path: string;
  key: string;
  component?: JSX.Element;
  exact?: boolean;
  redirectTo?: string;
  isMenu?: boolean;
  icon?: JSX.Element;
  children?: RouteConfig[];
  onMenuClick?(route: RouteConfig): unknown;
}

interface RouteView {
  key: string;
  path: string; // 路由的实际路径
  component?: JSX.Element;
  icon?: JSX.Element;
}
