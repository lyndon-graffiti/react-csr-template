import { request30783 } from ".";
import { GetPageConfigInfoRequestType, GetPageConfigInfoResponseType } from "./types30783/get-page-config-info";

export async function getPageConfigInfoApi(
  params: GetPageConfigInfoRequestType,
): Promise<GetPageConfigInfoResponseType> {
  return await request30783({
    params,
    url: "/getPageConfigInfo",
  });
}
