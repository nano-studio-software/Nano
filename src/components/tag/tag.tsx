import React, { FC } from "react";
import { cn } from "@utils/cn";

type TagProps = {
  text: string;
  textStyle?: string;
  containerStyle?: string;
};

export const Tag: FC<TagProps> = ({ text, textStyle, containerStyle }) => {
  return (
    <div className={cn("bg-tag rounded-full w-[fit-content] transition-all", containerStyle)}>
      <p className={cn("text-sm px-md py-1.5", textStyle)}>{text}</p>
    </div>
  );
};
