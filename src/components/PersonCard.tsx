import { User } from "@/utils/common/person";
import { FunctionComponent, PropsWithChildren } from "react";
import { PersonDataSkeleton } from "./PersonDataSkeleton";
import { PersonData } from "./PersonData";
import { PersonCardError } from "./PersonCardError";
import classNames from "classnames";

type PersonCardProps = {
  data: User | undefined;
  isLoading: boolean;
  error: boolean;
};

export const PersonCard: FunctionComponent<
  PropsWithChildren<PersonCardProps>
> = ({ data, isLoading, error }) => {
  return (
    <div
      className={classNames(
        "w-full h-full min-h-[200px]",
        "border-2 border-slate-600 rounded-2xl",
      )}
    >
      {!isLoading && error && <PersonCardError />}
      {!isLoading && data && !error && <PersonData data={data} />}
      {isLoading && <PersonDataSkeleton />}
    </div>
  );
};
