import { useLogs } from "@/contexts/LogsContext/useLogs";
import { formatDate } from "@/utils/common/formatters";
import { User } from "@/utils/common/person";
import { useEffect, useRef } from "react";

export const useLogPersonData = (personData: User | undefined): void => {
  const { enableLogs } = useLogs();

  useEffect(() => {
    if (enableLogs && personData) {
      const time = formatDate(new Date());

      console.log("Person details:", personData);
      console.log("Current time:", time);
    }
  }, [personData, enableLogs]);
};
