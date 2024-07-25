"use client";

import ReviewsCards from "@components/reviews";
import { Parallax } from "react-scroll-parallax";

export const Reviews = () => {
  return (
    <Parallax speed={20} easing={"easeOutQuad"}>
      <section
        id="reviews"
        className="dark-bg z-[30] bg-background w-full flex flex-col items-center mt-[-140px] pt-[80px] px-[180px] max-xl:px-[60px] max-md:px-[16px]"
      >
        <p className="text-white text-base font-light tracking-[0px] uppercase">Reviews</p>
        <p className="mt-[32px] text-white text-2xl font-semibold tracking-[0px]">
          We always value your opinion!
        </p>
        <p className="mt-6 text-line text-base text-center font-light tracking-[0px] max-w-[550px]">
          We appreciate every piece of feedback and strive to create projects that inspire you.
        </p>

        <ReviewsCards />
      </section>
    </Parallax>
  );
};
