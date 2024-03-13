import { useLogs } from "@/contexts/LogsContext/useLogs";
import { useTime } from "@/contexts/TimeContext/useTime";
import { User } from "@/utils/common/person";
import { useEffect, useRef } from "react";

export const useLogPersonData = (personData: User | undefined): void => {
  const { enableLogs } = useLogs();
  const { currentTime } = useTime();

  const time = useRef<Date | null>(null);

  time.current = currentTime;

  useEffect(() => {
    if (enableLogs && personData) {
      console.log("Person details:", personData);
      console.log("Current time:", time);
    }
  }, [personData, enableLogs]);
};
