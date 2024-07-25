"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const header = document.getElementsByTagName("header");

    Array.from(header).forEach((h) => {
      h.style.filter = "invert(100%)";
    });
  }, []);

  return (
    <main className="h-screen flex flex-col items-center justify-center text-center font-sans">
      <div className="flex items-center">
        <h1 className="next-error-h1 text-white inline-block m-0 mr-5 p-0 pr-6 text-2xl font-medium leading-[49px]">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-white text-base font-normal leading-[49px] m-0">
            This page could not be found.
          </h2>
        </div>
      </div>
    </main>
  );
}
