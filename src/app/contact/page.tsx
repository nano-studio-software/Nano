import React from "react";
import Image from "next/image";
import ContactForm from "@components/form";
import Footer from "@components/footer";

export default function Contact() {
  return (
    <>
      <main className="w-full relative flex flex-row max-lg:flex-col justify-end bg-main">
        {/* image */}
        <section
          id="image"
          className="dark-bg fixed max-lg:relative w-[50%] max-xl:w-[45%] max-lg:w-[100%] h-screen max-lg:h-[360px] top-0 left-0 self-start"
        >
          <Image
            src="/images/thinker.webp"
            alt="side image"
            width={3240}
            height={4050}
            priority
            className="object-cover h-full max-lg:object-top"
          />

          <div className="absolute left-[80px] bottom-lg max-lg:hidden">
            <p className="font-medium text-[64px] leading-[96px] text-white">
              Let&#39;s collaborate
            </p>

            <div className="flex mt-sm ">
              <p className="font-light text-base text-white">
                © 2023 Nano Studio. All rights reserved.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section
          id="contact-form"
          className="w-[50%] max-xl:w-[55%] max-lg:w-[100%] bg-main pt-[240px] max-lg:pt-[80px] px-[60px] max-lg:px-[60px] max-sm:px-[16px]"
        >
          <ContactForm />
        </section>
      </main>
      <div className="hidden max-sm:flex">
        <Footer />
      </div>
    </>
  );
}
