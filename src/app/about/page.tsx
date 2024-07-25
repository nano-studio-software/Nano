import Image from "next/image";
import Footer from "@components/footer";
import team from "@data/team.json";
import HowWeWork from "@components/how-we-work";

export default function About() {
  return (
    <>
      <main className="w-full bg-main">
        {/* Hero */}
        <h1 className="pt-[240px] uppercase text-center text-[64px] max-sm:text-[48px] font-semibold">
          Nano Team
        </h1>

        {/* Hero Image */}
        <Image
          src="/images/team.webp"
          alt="sale hero image"
          width={3720}
          height={2328}
          priority
          className="object-cover mt-[160px] max-sm:mt-[120px] max-sm:h-[500px]"
        />

        <section className="flex flex-row gap-[300px] max-xl:gap-[200px] max-lg:gap-[100px] max-md:gap-0   mt-[120px] max-sm:mt-[80px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-background text-2xl font-semibold max-sm:hidden">About</p>

          <div>
            <p className="text-base font-light text-line">
              Welcome to a realm where creativity meets professionalism, and love for what we do is
              our second nature. Our team is not just a group of experts; we are craftsmen and
              craftswomen, weaving our passion into every project.
              <br />
              <br />
              We are a family of enthusiasts, crafting masterpieces with your project. Every pixel,
              every line of code bears the mark of our passion, infused into each detail. We
              don&apos;t just do our job; we create a work of art, filling it with soul and
              inspiration.
              <br />
              <br />
              Our aim is not merely to meet your expectations but to create something extraordinary.
              For us, each project is a small miracle that we bring to life with enthusiasm and
              professional mastery.
              <br />
              <br />
              Trust us, and witness how your idea transforms into a magnificent work of art.
              It&apos;s our calling, our passion, your dream personified!
            </p>

            {/* Team members */}
            <div className="flex flex-wrap mt-[130px] max-sm:mt-[80px] gap-[40px]">
              {team.map((item) => (
                <div key={item.id} className="flex mr-[55px] max-xl:mr-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover w-[80px] h-[80px] rounded-full"
                  />

                  <div className="flex flex-col justify-center pl-6">
                    <p className="text-lg">{item.name}</p>
                    <p className="mt-[4px] text-line text-lg font-light">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-[120px] max-sm:mt-[80px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-background text-2xl font-semibold uppercase">HOW WE WORK</p>

          <HowWeWork />
        </section>
      </main>
      <Footer />
    </>
  );
}
