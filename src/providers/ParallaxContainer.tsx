"use client";

import React, { FC, PropsWithChildren } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const ParallaxContainer: FC<PropsWithChildren> = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
