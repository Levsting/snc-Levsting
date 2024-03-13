import { User } from "@/utils/common/person";
import classNames from "classnames";
import Image from "next/image";
import { FunctionComponent } from "react";

type PersonDataProps = {
  data: User;
};

export const PersonData: FunctionComponent<PersonDataProps> = ({ data }) => {
  return (
    <div
      className={classNames(
        "w-full h-full",
        "flex flex-col items-center",
        "p-[15px]",
      )}
    >
      <div
        className={classNames(
          "w-[100px] h-[100px]",
          "rounded-full",
          "overflow-hidden",
          "relative",
        )}
      >
        <Image
          src={data.profilePictureUrl}
          alt="User photo"
          className="absolute object-cover"
          fill={true}
          sizes="100px"
        />
      </div>

      <p
        className={classNames(
          "w-full",
          "text-center text-[22px] font-bold",
          "mt-[5px] ",
        )}
      >
        {data.name}
      </p>
      <p className={classNames("w-full max-w-[200px]", "text-center")}>
        {data.title}
      </p>
    </div>
  );
};
