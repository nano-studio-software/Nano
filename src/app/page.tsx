import Card from "@components/card";
import Footer from "@components/footer";
import projects from "@data/showcase-projects.json";
import { ServicesAndAbout, Reviews } from "@components/sections";

export default function Home() {
  return (
    <div id="fixed-image">
      <main className="bg-background">
        {/* Hero */}
        <section id="hero" className="dark-bg w-full flex flex-col items-center">
          {/* Title */}
          <h1 className="mt-[300px] max-md:mt-[280px] uppercase text-white text-center text-[96px] max-md:text-[48px] font-semibold tracking-[-4px]">
            Nano <span className="font-[200]">Studio</span>
          </h1>
          <p className="text-white text-center text-base font-light max-w-[615px] max-md:hidden">
            Big ideas, small studio. We design impactful brands, products, and apps that grow with
            you.
          </p>
          <p className="uppercase text-center text-[12px] font-light w-[250px] text-line md:hidden">
            Your personal makeup artist for the virtual world!
          </p>

          {/* Projects */}
          <div className="w-full mt-[200px] max-md:mt-[170px] pb-[60px]">
            <p className="uppercase text-white px-[180px] max-xl:px-[60px] max-md:px-[16px]">
              ENGAGED IN
            </p>

            <div
              className="mt-[42px] flex flex-row gap-[20px] px-[180px] max-xl:px-[60px] max-md:px-[16px] overflow-x-scroll snap-x"
              style={{ scrollbarWidth: "none" }}
            >
              {projects.map((proj) => (
                <Card
                  key={proj.id}
                  {...proj}
                  titleStyle="max-md:text-[20px]"
                  subtitleStyle="max-md:text-[10px]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services & How we work */}
        <ServicesAndAbout />

        {/* Reviews */}
        <Reviews />
      </main>

      <div className="mt-[1010px] pt-[100px] bg-background overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}
