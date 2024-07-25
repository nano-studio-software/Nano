import { FC } from "react";
import { cn } from "@utils/cn";

type ParagraphProps = {
  title: string;
  text: string;
  titleStyle?: string;
};

export const Paragraph: FC<ParagraphProps> = ({ title, text, titleStyle }) => (
  <>
    <p className={cn("text-base font-medium", titleStyle)}>{title}</p>
    <p className="mt-md max-md:mt-4 text-base text-line font-light">{text || "Unknown"}</p>
  </>
);
