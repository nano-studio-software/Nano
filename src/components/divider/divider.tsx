import React, { FC } from "react";

interface DividerProps {
  style?: string;
}

export const Divider: FC<DividerProps> = ({ style }) => {
  return <div className={`${style} w-full h-px bg-light-line my-lg`} />;
};
