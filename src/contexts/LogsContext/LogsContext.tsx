import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

export interface ILogContext {
  enableLogs: boolean;
  onToggleEnableLogs: () => void;
}

export const LogsContext = createContext<ILogContext | undefined>(undefined);

export const LogsContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState<boolean>(false);

  const onToggleEnableLogs = () => {
    setEnableLogs((prev) => !prev);
  };

  const value = {
    enableLogs,
    onToggleEnableLogs,
  };

  return <LogsContext.Provider value={value}>{children}</LogsContext.Provider>;
};
