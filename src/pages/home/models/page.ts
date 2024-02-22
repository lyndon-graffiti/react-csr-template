import { useGoTo } from "@/hooks/use-go-to";
import { useState } from "react";
import { createContainer } from "unstated-next";

const useContainer = () => {
  const { gotoAbout } = useGoTo();

  const [count, setCount] = useState<number>(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return {
    state: {
      count,
    },
    gotoAbout,
    onIncrease,
    onDecrease,
  };
};

export const Page = createContainer(useContainer);
