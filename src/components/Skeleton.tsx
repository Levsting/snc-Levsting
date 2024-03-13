import { FunctionComponent, PropsWithChildren } from "react";

export const Skeleton: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className="w-full animate-pulse">{children}</div>;
};
