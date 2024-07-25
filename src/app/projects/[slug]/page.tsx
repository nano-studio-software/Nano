import Image from "next/image";
import Tag from "@components/tag";
import Footer from "@components/footer";
import Divider from "@components/divider";
import projects from "@data/projects-full.json";
import InfoLabel from "@components/info-label";
import Link from "next/link";
import { renderParagraphs } from "@utils/render";
import BackButton from "@components/back-button";

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  const project = projects?.find((p) => p.slug === slug);

  if (!project) {
    return null;
  }

  const nextProjects = projects
    .filter((p) => p.slug !== slug && p.slug !== project.nextSlug)
    .slice(0, 4);

  return (
    <>
      <main className="w-full bg-main">
        {/* Header */}
        <section className="px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <div className="w-full pt-[320px] max-md:pt-[240px] flex flex-row max-md:flex-col-reverse items-center max-md:items-start gap-[120px] max-xl:gap-[60px] max-md:gap-[32px]">
            {/* @TODO: check gaps and title width*/}
            <h1 className="text-[64px] font-light">{project?.title}</h1>

            <div className="flex gap-6">
              {project?.tags?.map((tag) => (
                <Tag
                  key={tag}
                  text={tag || "Unknown"}
                  textStyle="px-[18px] py-[12px] max-md:px-[16px] max-md:py-[8px] text-base font-light"
                />
              ))}
            </div>
          </div>

          <Divider style="max-md:mb-md" />
        </section>

        {/* Hero Image */}
        <div className="relative w-ful h-[910px] max-md:h-[480px]">
          <Image
            src={project?.image}
            alt="Project hero image"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>

        {/* Content */}
        <section className="px-[180px] max-xl:px-[60px] max-md:px-[16px] mt-[120px] max-md:mt-lg flex flex-row max-md:flex-col-reverse flex-nowrap gap-[160px] max-xl:gap-[60px] max-md:gap-[90px]">
          {/* General Info */}
          <div className="w-[280px] max-md:w-full">
            <InfoLabel label="Services" value={project?.services?.join(" • ")} />
            <Divider style="mt-4 mb-4" />
            <InfoLabel label="Date" value={project?.date} />
            <Divider style="mt-4 mb-4" />
            <InfoLabel label="Client" value={project?.client} />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* @TODO: revert this to proper implementation and fix the render bug */}
            {project.content.map((section, index) => {
              if (section.type === "text" && section.sections) {
                return renderParagraphs(section.sections);
              }

              if (section.type === "media" && section.images) {
                if (section.images.length === 1) {
                  return (
                    <div
                      key={"image-cont" + index}
                      className="relative my-lg h-[450px] max-lg:h-[250px] max-md:h-[300px] max-sm:h-[480px] w-full"
                    >
                      <Image
                        src={section.images[0]}
                        alt="project image"
                        fill
                        priority
                        quality={100}
                        className="object-cover rounded-[20px] bg-background"
                      />
                    </div>
                  );
                }

                return (
                  <div
                    key={"image-cont" + index}
                    className="my-lg flex flex-row max-sm:flex-col gap-md"
                  >
                    {section.images?.map((image, index) => (
                      <div
                        key={"image" + index}
                        className="relative h-[345px] max-lg:h-[220px] max-sm:h-[280px] w-full"
                      >
                        <Image
                          src={image}
                          alt="project image"
                          fill
                          priority
                          quality={100}
                          className="object-cover rounded-[20px] bg-background"
                        />
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </section>

        <section className="pb-[120px] max-md:pb-[80px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <Divider style="mt-[80px] max-md:mb-[24px]" />

          <div className="flex flex-row items-center gap-[160px]">
            <BackButton />

            <div className="flex-1 flex flex-row justify-between items-center max-md:justify-end">
              <Link
                href={"/projects/" + project.nextSlug}
                className="uppercase text-[42px] font-semibold"
              >
                Next
              </Link>

              <div className="flex gap-md max-md:hidden">
                {nextProjects.map((p) => (
                  <Link
                    key={p.id + "link"}
                    href={"/projects/" + p.slug}
                    className="border-b-[1.5px] border-transparent transition-all duration-500 hover:border-black hover:scale-[1.1] "
                  >
                    <p className="capitalize">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// <-- SSG Setup -->  If no project got to not found page
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
