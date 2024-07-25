"use client";

import { Parallax } from "react-scroll-parallax";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/accordion";
import HowWeWork from "@components/how-we-work";
import Card from "@components/card";
import team from "@data/team.json";
import services from "@data/studio-services.json";

export const ServicesAndAbout = () => {
  return (
    <Parallax speed={20} easing={"easeOutQuad"}>
      <section
        id="services"
        className="z-[20] bg-white w-full mt-[-100px] pt-[120px] px-[180px] max-xl:px-[60px] max-md:px-[16px]"
      >
        <p className="text-base font-light uppercase">Services</p>

        <div className="mt-[42px] max-md:mt-[32px] flex flex-row max-md:flex-col justify-between gap-[180px] max-xl:gap-[130px] max-lg:gap-[100px] max-md:gap-[80px]">
          <div className="flex-1">
            <p className="text-6 font-semibold">What are we good at ...</p>
            <p className="mt-6 text-base text-line font-light">
              Whether you&apos;re looking for a new website, mobile app, or interactive marketing
              campaign, we can help you create something truly remarkable. We&apos;re not afraid to
              push the boundaries of design, and we&apos;re always looking for new ways to surprise
              and delight our clients.
            </p>
          </div>

          <div className="flex-1">
            {services.map((service, index) => (
              <Accordion
                key={service.id}
                type="single"
                collapsible
                defaultValue="item-1"
                className={index > 0 ? "mt-[30px]" : ""}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="font-semibold text-2xl max-sm:text-xl">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-text font-light mt-2 pb-[30px]">
                    <p className="text-base text-line font-light whitespace-pre-wrap">
                      {service.text}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="max-md:hidden bg-white w-full flex flex-col pt-[120px] pb-[60px] px-[180px] max-xl:px-[60px] max-md:px-[16px]"
      >
        <p className="text-background text-base font-light  uppercase">HOW WE WORK</p>
        <p className="mt-[42px] text-background font-semibold">From Research to Success</p>

        <HowWeWork />
      </section>

      {/* MOBILE:  About  */}
      <section id="about" className="md:hidden pt-[120px] pb-[120px] bg-white">
        <div className=" max-md:px-[16px]">
          <p className="text-background text-base font-light  uppercase">ABOUT</p>
          <p className="mt-[32px] text-background font-semibold">What the ai says about us</p>
          <p className="mt-6 text-line font-light">
            We are a team of crazy geniuses who turn pixels into magic and code into creativity.
          </p>
        </div>

        <div
          className="mt-[42px] flex flex-row gap-[20px] px-[180px] max-xl:px-[60px] max-md:px-[16px] overflow-x-scroll snap-x"
          style={{ scrollbarWidth: "none" }}
        >
          {team.map((per) => (
            <Card
              key={per.id}
              title={per.name}
              type={per.title}
              progress={per.position}
              image={per.image}
              titleStyle="text-[12px] font-medium"
              subtitleStyle="text-line text-[8px]"
              tagStyle="bg-white"
              tagTextStyle="text-black"
            />
          ))}
        </div>
      </section>
    </Parallax>
  );
};
