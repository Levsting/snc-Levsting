import { useTime } from "@/contexts/TimeContext/useTime";
import { formatDate } from "@/utils/common/formatters";
import { FunctionComponent, useEffect, useState } from "react";

export const CurrentTime: FunctionComponent = () => {
  const { currentTime } = useTime();

  return (
    <div>
      <p>{currentTime ? formatDate(currentTime) : "Loading current time!"}</p>
    </div>
  );
};
