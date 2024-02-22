import { useGoTo } from "@/hooks/use-go-to";
import { createContainer } from "unstated-next";

const useContainer = () => {
  const { gotoHome } = useGoTo();

  return {
    gotoHome,
  };
};

export const Page = createContainer(useContainer);
