import classNames from "classnames";
import { FunctionComponent } from "react";

export const PersonCardError: FunctionComponent = () => {
  return (
    <p
      className={classNames(
        "w-full h-full",
        "flex items-center justify-center",
      )}
    >
      Something went wrong!
    </p>
  );
};
