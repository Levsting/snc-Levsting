import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export interface ITimeContext {
  currentTime: Date | null;
}

export const TimeContext = createContext<ITimeContext | undefined>(undefined);

export const TimeContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const value = {
    currentTime,
  };

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};
