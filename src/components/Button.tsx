import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick: () => void;
  isSelected: boolean;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  onClick,
  isSelected,
  children,
}) => {
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black", {
        "bg-green-300": isSelected,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
