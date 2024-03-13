import { FunctionComponent } from "react";
import { Skeleton } from "./Skeleton";
import classNames from "classnames";

export const PersonDataSkeleton: FunctionComponent = () => {
  return (
    <Skeleton>
      <div
        className={classNames(
          "w-full",
          "flex flex-col items-center",
          "p-[15px]",
        )}
      >
        <div
          className={classNames(
            "w-[100px] h-[100px]",
            "rounded-full",
            "bg-slate-300",
          )}
        />
        <div
          className={classNames(
            "w-full max-w-[200px] h-[22px]",
            "bg-slate-300",
            "mt-[10px]",
          )}
        />
        <div
          className={classNames(
            "w-full max-w-[200px] h-[18px]",
            "bg-slate-300",
            "mt-[10px]",
          )}
        />
      </div>
    </Skeleton>
  );
};
