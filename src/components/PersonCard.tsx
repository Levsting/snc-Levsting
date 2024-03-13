import { User } from "@/utils/common/person";
import { FunctionComponent, PropsWithChildren } from "react";
import { PersonDataSkeleton } from "./PersonDataSkeleton";
import { PersonData } from "./PersonData";
import { PersonCardMessage } from "./PersonCardMessage";
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
      {!data && !isLoading && !error && (
        <PersonCardMessage text="Please select the person!" />
      )}
      {!isLoading && error && (
        <PersonCardMessage text="Something went wrong!" />
      )}
      {!isLoading && data && !error && <PersonData data={data} />}
      {isLoading && <PersonDataSkeleton />}
    </div>
  );
};
