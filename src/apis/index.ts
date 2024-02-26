import axios from "axios";
import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import getRequestBaseUrl from "@/utils/get-request-base-url";

type InstanceParams = {
  baseURL: string;
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  responseInterceptor?: (response: AxiosResponse) => any;
};

/** 单例模式，生成封装后的请求实例 */
class RequestInstace {
  private static instance: AxiosInstance;

  public static getInstance(params: InstanceParams) {
    const { baseURL, requestInterceptor, responseInterceptor } = params || {};

    if (!RequestInstace.instance) {
      /** 生成 axios 实例 */
      const tmpInstance = axios.create({
        baseURL: baseURL || "",
        timeout: 3000,
        // 携带 cookie，在复杂请求中使用 Access-Control-Allow-Credentials
        withCredentials: true,
        // 自定义请求头
        headers: {},
      });

      /** 请求拦截器 */
      tmpInstance.interceptors.request.use(requestInterceptor, (error: AxiosError) => Promise.reject(error));

      /** 响应拦截器 */
      tmpInstance.interceptors.response.use(responseInterceptor, (error: AxiosError) => Promise.reject(error));

      RequestInstace.instance = tmpInstance;
    }

    return RequestInstace.instance;
  }
}

type PostRequestParams = {
  url: string;
  params?: any;
};

/** 后端的 soa 只接受 post 请求 */
export const request30783 = <T = any>({ url, params }: PostRequestParams): Promise<T> => {
  return RequestInstace.getInstance({
    baseURL: getRequestBaseUrl("30783"),
  }).post(url, params);
};
