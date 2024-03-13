import { useContext } from "react";
import { ITimeContext, TimeContext } from "./TimeContext";

export const useTime = (): ITimeContext => {
  const context = useContext(TimeContext);

  if (!context) {
    throw new Error(
      `You can't use TimeContext outside of the TimeContextProvider`,
    );
  }

  return context;
};
