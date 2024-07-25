"use client";

import Image from "next/image";
import Card from "@components/card";
import reviews from "@data/reviews.json";
import { useState } from "react";

export const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const canGoBack = activeReview > 0;
  const canGoNext = activeReview < reviews.length - 1;

  const handleNextPressed = () => {
    if (canGoNext) {
      setActiveReview((p) => p + 1);
    }
  };

  const handleBackPressed = () => {
    if (canGoBack) {
      setActiveReview((p) => p - 1);
    }
  };

  return (
    <div className="relative w-full h-[500px] max-md:h-[320px] mt-[120px] flex justify-between items-center ">
      {reviews.map((review, index) => {
        const isVisible = activeReview === index;

        return (
          <div
            key={review.id}
            className={`absolute top-0 left-0 right-0  flex justify-between items-center transition-all ${isVisible ? "opacity-1" : "opacity-0"}`}
          >
            <div className="max-md:hidden">
              <Card
                title={review.author.name}
                type={review.author.title}
                progress={review.author.company}
                image={review.author.image}
                tagStyle="bg-white"
                tagTextStyle="text-black"
              />
            </div>

            <div className="flex flex-col gap-lg max-w-[600px]">
              <div className="flex gap-sm">
                <button
                  className={`flex justify-center items-center rounded-full border p-3 border-[#212121] ${canGoBack ? "bg-[#212121]" : ""}`}
                  onClick={handleBackPressed}
                >
                  <Image src="/svg/general/arrow.svg" alt="arrow-down" width={24} height={24} />
                </button>

                <button
                  className={`flex justify-center items-center rounded-full border p-3 rotate-180 border-[#212121] ${canGoNext ? "bg-[#212121]" : ""}`}
                  onClick={handleNextPressed}
                >
                  <Image src="/svg/general/arrow.svg" alt="arrow-down" width={24} height={24} />
                </button>
              </div>

              <h3 className="text-white text-[32px] max-md:text-[24px] font-medium">
                &quot;{review.text}&quot;
              </h3>

              <div className="flex items-center">
                <Image
                  src={review.author.image}
                  alt="arrow-down"
                  width={84}
                  height={84}
                  className="w-[84px] h-[84px] max-md:w-[64px] max-md:h-[64px] rounded-full object-cover"
                />
                <div className="ml-6">
                  <p className="text-white">Isabella Rose</p>
                  <p className="text-line font-light">SparkIdeas Founder</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
