import Tag from "@components/tag";
import { cn } from "@utils/cn";
import Image from "next/image";
import React, { FC } from "react";

// @TODO: refactor this and give props proper names
type CardProps = {
  image: string;
  title: string;
  progress: string;
  type: string;
  date?: string;
  config?: {
    priority?: boolean;
    quality?: number;
  };
  titleStyle?: string;
  subtitleStyle?: string;
  tagStyle?: string;
  tagTextStyle?: string;
};

export const Card: FC<CardProps> = ({
  image,
  title,
  progress,
  type,
  date,
  config = {
    priority: false,
    quality: 100,
  },
  titleStyle,
  subtitleStyle,
  tagStyle,
  tagTextStyle,
}) => {
  return (
    <div className="relative shrink-0">
      <div className="absolute top-6 max-md:top-4 left-6 max-md:left-4 ">
        <p className={cn("uppercase text-white text-[24px] font-medium", titleStyle)}>{title}</p>
        <p className={cn("lowercase text-white text-[12px] font-light", subtitleStyle)}>{type}</p>
      </div>

      <Image
        src={image}
        alt="project image"
        width={400}
        height={500}
        priority={config.priority}
        quality={config.quality}
        className="object-cover rounded-[20px] max-md:w-[260px] max-md:h-[325px]"
      />

      <div className="absolute bottom-6 max-md:bottom-4 left-6 max-md:left-4 right-6 max-md:right-4 flex justify-between">
        <Tag
          text={progress}
          textStyle={cn(
            "text-white uppercase text-[12px] max-md:text-[8px] px-[16px] py-[9px] max-md:px-[12px] max-md:py-[6px]",
            tagTextStyle,
          )}
          containerStyle={cn("bg-black", tagStyle)}
        />
        {date && (
          <Tag
            text={date}
            textStyle="text-white text-[12px] px-[16px] py-[9px]"
            containerStyle={cn("bg-black max-md:hidden", tagStyle)}
          />
        )}
      </div>
    </div>
  );
};
