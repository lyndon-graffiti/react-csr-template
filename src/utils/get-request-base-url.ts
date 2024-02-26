/**
 * 通过 hostname 来判断接口调用环境
 */
export default (soaCode: string) => {
  // TODO: 修改为自己项目的域名
  const formatEnv = window?.location?.hostname === "xxx.xxx.com" ? "prod" : "fat";

  const soaApiPrefix = {
    fat:
      typeof window === "undefined"
        ? `https://xxx.xxx.com/restapi/soa2/${soaCode}`
        : // 本地域名默认 http，只能走代理，不能直接使用 localhost
          `http://xxx.xxx.com/soa2/${soaCode}`,

    prod:
      typeof window === "undefined"
        ? `https://xxx.xxx.com/restapi/soa2/${soaCode}`
        : `https://xxx.xxx.com/soa2/${soaCode}`,
  };

  return soaApiPrefix[formatEnv as keyof typeof soaApiPrefix];
};
