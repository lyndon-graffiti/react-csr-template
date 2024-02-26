import { routes } from "@/routers";

/**
 * 获取每个具体页面的元信息
 */
export default () => {
  const finallyPagePathMap: RouteConfig[] = [];

  const traverse = (parentPath: string, currentRouters: RouteConfig[]) => {
    currentRouters.forEach(item => {
      if (!item?.children?.length) {
        finallyPagePathMap.push({
          ...item,
          path: `${parentPath}${item.path}`,
        });
      } else {
        traverse(`${parentPath}${item.path}`, item.children);
      }
    });
  };

  traverse("", routes);

  return finallyPagePathMap;
};
