"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "@components/tag";
import Footer from "@components/footer";
import Divider from "@components/divider";
import { PROJECT_FILTERS, ProjectFilters, SORTED_PROJECTS } from "@constants/constants";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilters>(ProjectFilters.All);
  const data = SORTED_PROJECTS?.[selectedFilter];

  return (
    <>
      <main className="w-full bg-main">
        {/* Hero */}
        <h1 className="pt-[240px] text-center text-[64px] max-md:text-[48px] max-sm:text-[48px] font-semibold">
          Projects
        </h1>

        {/* Filter Bar */}
        <div className="mt-[240px] max-md:mt-8 px-[120px] max-xl:px-[60px] max-md:px-[16px]">
          <div className="flex flex-row max-md:flex-col max-md:gap-7 items-center justify-between">
            <p className="uppercase text-2xl max-md:text-base font-light">Case studies</p>

            <div className="flex flex-row gap-3">
              {PROJECT_FILTERS.map((f) => {
                const isActive = f.value === selectedFilter;

                return (
                  <button key={f.id} onClick={() => setSelectedFilter(f.value)}>
                    <Tag
                      text={f.label}
                      containerStyle={`hover:scale-[1.1] ${isActive ? "bg-background" : ""}`}
                      textStyle={`font-light text-base ${isActive ? "text-white" : ""}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <Divider style="mt-[20px] max-md:mt-[80px] mb-8 max-md:mb-6 bg-light-line" />

          {/* Projects List */}
          {data.map((project) => (
            <Fragment key={project.id}>
              <Link
                href={"/projects/" + project.slug}
                className="relative flex flex-row max-md:flex-col-reverse justify-between items-center transition-all duration-500 hover:scale-[1.05]"
              >
                <p className="md:hidden w-full max-md:mt-0 text-line text-base font-light">
                  {project.description}
                </p>
                <p className="w-[30%] max-lg:w-[38%] max-md:w-full text-[56px] max-xl:text-[50px] max-lg:text-[45px] max-md:text-[32px] max-md:mt-4 font-light whitespace-nowrap overflow-hidden text-ellipsis">
                  {project.title}
                </p>
                <Tag
                  text={project.type === "Mobile" ? "Mobile App" : project.type}
                  textStyle="text-base font-light max-md:text-xs max-md:px-2"
                  containerStyle="max-md:absolute max-md:top-3 max-md:left-3"
                />
                <p className="text-base font-light max-md:hidden">{project.date}</p>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={280}
                  height={170}
                  className="object-cover rounded-[20px] max-md:w-full"
                />
              </Link>

              <Divider style="my-8 max-md:my-6 bg-light-line" />
            </Fragment>
          ))}

          <p className="mt-[80px] max-md:mt-[30px] pb-[120px] text-center text-base font-light">
            More coming soon
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
