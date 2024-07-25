"use client";

import React, { FC } from "react";
import Link from "next/link";
import socials from "@data/socials.json";
import Divider from "@components/divider";
import useInView from "@hooks/useInView";
import Image from "next/image";
import madama from "@public/images/team/madam.webp";
import petro from "@public/images/team/petrucio.webp";

const basicLinkStyle =
  "max-md:hidden capitalize text-line border-b-[1.5px] border-transparent transition-all duration-500 hover:text-white hover:scale-[1.1] hover:border-white";

export const Footer: FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="dark-bg pt-[30px]">
      <footer className="w-full px-[180px] max-xl:px-[60px] max-md:px-[16px] bg-background">
        {/* Content */}
        <div className="mt-[110px] max-md:mt-[90px] flex max-md:flex-col-reverse justify-between items-center">
          {/* Heading */}
          <div className="max-w-[45%] max-md:max-w-[100%] max-md:flex max-md:flex-col max-md:items-center max-md:mt-[80px]">
            <p className="text-base max-md:text-xs font-light tracking-[2px] uppercase text-white max-md:text-center">
              Innovate your business
            </p>
            <p className="uppercase text-[68px] max-xl:text-[64px] max-lg:text-[58px] max-md:text-[48px] leading-[78px] max-md:leading-[62px] font-semibold mt-6 text-white max-md:text-center">
              Let&apos;s collaborate
            </p>

            <div className="button-container-1 pulse mt-lg">
              <span className="mas">
                <p className="text-base font-medium">Submit your project</p>
              </span>
              <Link
                href="/contact"
                id="work"
                type="button"
                className="w-[fit-content] px-[32px] py-[14px] flex justify-center items-center rounded-full bg-white transition-all duration-300 hover:scale-[1.1]"
              >
                <p className="text-base font-medium">Submit your project</p>
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div
            ref={ref}
            className="relative w-[50%] max-md:w-full flex justify-center items-center scale-[0.9] max-xl:scale-[0.8] max-lg:scale-[0.7] max-md:scale-[0.8]"
          >
            <Image
              src={petro}
              alt="petro"
              style={{
                objectFit: "cover",
              }}
              className={`absolute z-10 flex w-[300px] h-[370px] transition-all duration-700 rounded-3xl  ${isInView ? "-rotate-[15deg] max-md:-rotate-[10deg] -left-10 max-lg:-left-[10%] max-sm:-left-[40%] -top-[-40px] max-sm:-top-[-25px] max-sm:scale-[0.95]" : "-rotate-[0deg] -left-[0px] -top-[0px]"}`}
            />

            {/* Discount card */}
            <div className="z-20 flex flex-col px-6 py-11 text-base rounded-3xl bg-main max-w-[327px]">
              <Image
                src="/svg/general/discount.svg"
                alt="discount"
                loading="lazy"
                width={48}
                height={48}
                className="w-12 aspect-square"
              />
              <div className="uppercase mt-12 text-4xl font-semibold text-background">OFFER</div>
              <div className="mt-6 font-light leading-6 text-line">
                So don&quot;t miss your chance to save money and get a quality product at a bargain
                price.
              </div>
              <Link
                href="/discount"
                className="w-[fit-content] justify-center py-px mt-14 text-background border-b-background border-b"
              >
                Get Discount
              </Link>
            </div>

            <Image
              src={madama}
              alt="petro"
              style={{
                objectFit: "cover",
                objectPosition: "80% 50%",
              }}
              className={`absolute z-10 flex w-[300px] h-[370px] transition-all duration-700 rounded-3xl ${isInView ? "-right-10 max-sm:-right-[40%] -top-[-40px] max-sm:-top-[-25px] max-sm:scale-[0.95] -rotate-[-15deg] max-md:-rotate-[-10deg]" : "-right-[0px] -top-[0px] -rotate-[0deg]"} `}
            />
          </div>
        </div>

        {/* Socials */}
        <div className="mt-[150px] max-md:mt-[80px] mb-lg">
          <div
            id="footer-socials"
            className="flex gap-lg max-md:gap-[12px] max-md:justify-center max-md:mb-[40px]"
          >
            {socials.map((social) => (
              <Link
                href={social.link}
                target="_blank"
                key={social.id}
                className="flex items-center justify-center"
              >
                <p className={basicLinkStyle}>{social.label}</p>

                <div className="md:hidden w-[48px] h-[48px] flex items-center justify-center rounded-full border-faded border-[1px]">
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={social.size}
                    height={social.size}
                    className="invert"
                  />
                </div>
              </Link>
            ))}
          </div>

          <Divider style="my-md bg-line" />

          <div className="flex justify-between max-md:justify-center items-center">
            <p className="text-line">© 2023 Nano Studio. All rights reserved.</p>
            <div className="flex gap-lg max-md:hidden">
              <Link href="/">
                <p className={basicLinkStyle}>Privacy</p>
              </Link>
              <Link href="/">
                <p className={basicLinkStyle}>Terms</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
