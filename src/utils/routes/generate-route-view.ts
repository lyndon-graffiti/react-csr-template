import { routes } from "@/routers";

/**
 * 获取每个具体页面的元信息
 */
export default () => {
  const finallyPagePathMap: RouteView[] = [];

  const traverse = (parentPath: string, currentRouters: RouteConfig[]) => {
    currentRouters.forEach(item => {
      if (!item?.children?.length) {
        finallyPagePathMap.push({
          key: item.key,
          path: `${parentPath}${item.path}`,
          component: item?.component,
        });
      } else {
        traverse(`${parentPath}${item.path}`, item.children);
      }
    });
  };

  traverse("", routes);

  return finallyPagePathMap;
};
