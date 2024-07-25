"use client";

import React from "react";
import Image from "next/image";

export const BackButton = () => {
  const handleBackClick = () => {
    window?.history.back();
  };

  return (
    <button className="w-[280px]" onClick={handleBackClick}>
      <Image
        src="/svg/general/arrow-down.svg"
        alt="arrow-down"
        width={42}
        height={42}
        className="rotate-[135deg]"
      />
    </button>
  );
};
