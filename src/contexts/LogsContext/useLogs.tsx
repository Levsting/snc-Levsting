import { useContext } from "react";
import { ILogContext, LogsContext } from "./LogsContext";

export const useLogs = (): ILogContext => {
  const context = useContext(LogsContext);

  if (!context) {
    throw new Error(
      `You can't use LogsContext outside of the LogsContextProvider`,
    );
  }

  return context;
};
