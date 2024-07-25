"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideBar from "./side-menu";
import { usePathname } from "next/navigation";
import { isDeviceMobile } from "@utils/mobile";

export const NavBar: FC = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const invertHeader = isHomePage || isContactPage;

  const isMobile = isDeviceMobile();
  const isContactsPageDesktop = isContactPage && !isMobile;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const header = document.getElementsByTagName("header");

    const handleScroll = () => {
      if (isContactsPageDesktop) {
        return;
      }

      sections.forEach((section) => {
        const firstClassName = section.getAttribute("class")?.split(" ")[0];

        const sectionOffset = 380;
        const sectionTop = section.getBoundingClientRect().top + sectionOffset;
        const sectionBottom = section.getBoundingClientRect().bottom + sectionOffset;

        if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
          // Check if the section is dark or light
          if (firstClassName === "dark-bg") {
            header?.[0]?.classList?.add("invert");
          } else {
            header?.[0]?.classList.remove("invert");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-screen max-w-screen-2xl flex flex-row items-center justify-between mt-lg px-20 max-xl:px-[60px] max-md:px-[16px] ${invertHeader && "invert"}`}
      >
        <Link href="/">
          <div className={`logo flex`}>
            <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
            <Image
              src="/svg/nano.svg"
              alt="nano"
              priority
              width={59}
              height={19}
              className="ml-1"
            />
          </div>
          <span className="sr-only">logo</span>
        </Link>

        <div
          className={`logo flex justify-between items-center ${isContactPage ? "md:invert" : ""}`}
        >
          <Link href="/contact" className="p-0 mr-lg max-sm:hidden">
            <p className="text-black underline underline-offset-8">Submit you&#39;r project</p>
          </Link>

          <button
            aria-label="Burger menu"
            onClick={() => setIsOpen(true)}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <Image id="burger" src="/svg/general/menu.svg" alt="Menu" width={32} height={32} />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
