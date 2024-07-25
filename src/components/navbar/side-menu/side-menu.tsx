"use client";

import { FC, useState } from "react";
import Image from "next/image";
import navigationItems from "@data/navigation.json";
import socials from "@data/socials.json";

import Link from "next/link";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import project1 from "../../../../public/images/projects/proj1.webp";
interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const idsToFilter = [3];
const filtered_socials = socials.filter((s) => !idsToFilter.includes(s.id));

export const SideBar: FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const segments = useSelectedLayoutSegments();

  const pathname = segments?.[0];

  const [hovered, setHovered] = useState(false);

  const getIsOnPage = (label: string, index: number) => {
    if (index === 0) {
      return !pathname;
    }

    return pathname === label.toLocaleLowerCase();
  };

  const onLogoPressed = () => {
    router.push("/");
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`z-[150] absolute top-10 left-20 max-xl:left-[60px] max-md:left-[16px] transition-all delay-250 duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onLogoPressed}
      >
        <div className="logo flex invert">
          <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
          <Image src="/svg/nano.svg" alt="nano" width={59} height={19} className="ml-1" />
        </div>
        <span className="sr-only">logo</span>
      </button>

      {/* Menu */}
      <div
        id="drawer-navigation"
        className="z-[140] fixed top-0 right-0 w-[50%] max-sm:w-full h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-black ease-out duration-500 flex items-center justify-center max-md:justify-start"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        style={{ transform: isOpen ? "translateX(0)" : "" }}
      >
        {/* Close Button */}
        <button
          aria-label="Burger menu"
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-20 max-xl:right-[60px] max-md:right-[16px] h-[32px] w-[32px] flex items-center justify-center"
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <Image src="/svg/general/cross.svg" alt="cross" width={24} height={24} />
          <span className="sr-only">Close Menu</span>
        </button>

        <div className="px-20 max-md:px-[16px]">
          <p className="text-faded text-base font-medium pb-4">Menu</p>

          {/* Navigation  */}
          <nav>
            <ul className="flex flex-col">
              {navigationItems.map((item, index) => {
                const isOnPage = getIsOnPage(item.label, index);

                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      <p
                        className={`text-5xl font-medium ${isOnPage && !hovered ? "text-white" : "text-faded"} hover:text-white hover:scale-[1.1] transition-all uppercase py-4`}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <p className="text-faded text-base font-medium pt-[42px] pb-4">Social</p>
          <div id="menu-socials" className="flex items-start gap-[24px] max-md:gap-[12px]">
            {filtered_socials.map((social) => (
              <Link key={social.id + social.label} href={social.link} target="_blank">
                <p className="capitalize text-faded text-base hover:text-white transition-all max-md:hidden">
                  {social.label}
                </p>

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
        </div>
      </div>

      {/* Images */}
      <div
        id="drawer-navigation"
        className="fixed max-sm:hidden top-0 right-0 z-20 w-screen h-screen overflow-hidden transition-transform translate-x-full bg-background ease-out duration-500 pr-nav"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        style={{ transform: isOpen ? "translateX(0)" : "" }}
      >
        <div
          className={`h-full max-lg:h-[70%] w-[45%] max-lg:w-[50%] rounded-[60px] bg-gradient-brown absolute top-[160px] transition-all delay-200 duration-500 ${isOpen ? "-rotate-[5deg] right-[37%] max-lg:right-[35%]" : "-rotate-[0deg] right-[30%]"}`}
        />

        <Image
          src={project1}
          alt="project"
          width={2191}
          height={2911}
          placeholder="blur"
          className={`object-cover h-full max-lg:h-[70%] w-[45%] max-lg:w-[50%] rounded-[60px] bg-black absolute top-[180px] transition-all delay-100 duration-500 ${isOpen ? "-rotate-[15deg] right-[42%] max-2xl:right-[40%]" : "-rotate-[0deg] right-[35%]"} flex-shrink-0`}
          style={{ objectPosition: "0px -2px" }}
        />
      </div>
    </>
  );
};
