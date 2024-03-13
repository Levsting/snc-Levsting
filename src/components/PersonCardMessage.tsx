import classNames from "classnames";
import { FunctionComponent } from "react";

type PersonCardMessageProps = {
  text: string;
};

export const PersonCardMessage: FunctionComponent<PersonCardMessageProps> = ({
  text,
}) => {
  return (
    <p
      className={classNames(
        "w-full h-full",
        "flex items-center justify-center",
      )}
    >
      {text}
    </p>
  );
};
