import { formatDate } from "@/utils/common/formatters";
import { FunctionComponent, useEffect, useState } from "react";

export const CurrentTime: FunctionComponent = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{currentTime ? formatDate(currentTime) : "Loading current time!"}</p>
    </div>
  );
};
