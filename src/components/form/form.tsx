"use client";
import Divider from "@components/divider";
import React, { FC, SyntheticEvent, useRef, useState, useTransition } from "react";
import budget from "@data/budget.json";
import services from "@data/services.json";
import discounts from "@data/discounts.json";
import Spinner from "@components/spinner";
import { send } from "@emailjs/browser";

export const ContactForm: FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, startTransition] = useTransition();

  const [selectedBudget, setSelectedBudget] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();
  const [selectedDiscount, setSelectedDiscount] = useState<string>();
  const [error, setError] = useState<{ budget?: string; service?: string; discount?: string }>({});

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    startTransition(async () => {
      if (!selectedService) {
        const scrollDiv = (document?.getElementById("service-title")?.offsetTop || 0) - 150;
        window.scrollTo({ top: scrollDiv, behavior: "smooth" });
        setError({ service: "Please select a service!" });
        return;
      }

      if (!selectedBudget) {
        const scrollDiv = (document?.getElementById("budget-title")?.offsetTop || 0) - 150;
        window.scrollTo({ top: scrollDiv, behavior: "smooth" });
        setError({ budget: "Please select a budget!" });
        return;
      }

      if (!selectedDiscount) {
        setError({ discount: "Please select a discount!" });
        return;
      }

      if (form?.current) {
        // @TODO: find a way to fix the ts errors
        const data = await send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            // @ts-expect-error - could not solve ts error
            name: form.current.name.value,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            email: form.current.email.value,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            message: form.current.message.value,
            budget: selectedBudget,
            discount: selectedDiscount,
            service: selectedService,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        );

        if (data.status === 200) {
          setIsSent(true);
        }

        form?.current?.reset();
        setSelectedDiscount("");
        setSelectedBudget("");
        setSelectedService("");
      }
    });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-[560px] max-md:max-w-[100%] pb-[120px]"
    >
      <p className="font-bold text-[2.625rem] max-sm:text-[2rem] leading-[50px] max-sm:leading-[40px]">
        BREATHE LIFE
        <br />
        INTO YOUR IDEAS
      </p>

      <Divider />

      {/* Services */}
      <p id="service-title" className="font-semibold text-base">
        Service
      </p>
      <p className=" text-base text-line font-light mt-md">
        &#34;Select one or more of the options you need,&#34; where each click is like unwrapping a
        gift at a New Year&#39;s party!
      </p>

      <fieldset id="service" className="mt-lg flex flex-col gap-3">
        {services.map((service, index) => (
          <div key={service.id} className="flex items-center">
            <input
              id={`default-radio-${index}`}
              type="radio"
              value={service.label}
              onChange={(e) => {
                setSelectedService(e?.target.value);
                error?.service && setError({});
              }}
              name="default-radio"
              className="w-4 h-4 appearance-none bg-main rounded-full bg-clip-content border-[1px] border-line hover:border-[#5c5c5c] checked:p-[2px] checked:bg-black checked:border-black checked:hover:bg-black checked:hover:border-black"
            />
            <label
              htmlFor={`default-radio-${index}`}
              className="ms-2 text-base font-light text-line"
            >
              {service.label}
            </label>
          </div>
        ))}
      </fieldset>
      {error?.service && <p className="text-red-500 mt-5">{error.service}</p>}

      {/* Info */}
      <p className="font-semibold text-base mt-lg">Info</p>
      <p className="text-base text-line font-light mt-md">
        Tell us more about you - who are you in this vast universe, and what project do you want to
        make a reality?
      </p>

      <div className="flex max-sm:flex-col mt-lg gap-[50px] max-sm:gap-[40px]">
        <input
          required
          id="name"
          type="name"
          name="name"
          placeholder="Name"
          maxLength={55}
          className="w-full h-[30px] bg-main border-light-line border-b-[1px] text-base text-black font-light placeholder-text "
        />

        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          title="exmaple@gmail.com"
          onInvalid={() => "Please match the requested format: exmaple@gmail.com"}
          pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
          maxLength={55}
          className="w-full h-[30px] bg-main border-light-line border-b-[1px] text-base text-black font-light placeholder-text"
        />
      </div>

      <textarea
        required
        name="message"
        placeholder="Project details"
        className="w-full h-[30px] bg-main border-light-line border-b-[1px] text-base text-black font-light placeholder-text mt-lg"
      />

      {/* Beget */}
      <p id="budget-title" className="font-semibold text-base mt-lg">
        Your budget
      </p>
      <p className=" text-base text-line font-light mt-md">
        At Nano Studio, we appreciate that start-ups and small studios have limited resources. But
        no big money doesn&#39;t mean no online presence!
      </p>

      <fieldset id="budget" className="inline-block mt-[28px]">
        {budget.map((item, index) => {
          const selected = selectedBudget === item.value;

          return (
            <div
              key={item.id}
              className={`justify-center content-center inline-block px-3 border rounded-full border-light-line h-9 mr-[12px] mt-[12px] ${selected ? "border-black bg-black" : "border-light-line bg-transparent"}`}
            >
              <input
                id={`budget-radio-${index}`}
                type="radio"
                value={item.value}
                onChange={(e) => {
                  setSelectedBudget(e?.target.value);
                  error?.budget && setError({});
                }}
                name="budget-radio"
                className="hidden visibility-hidden budget-radio"
              />
              <label
                htmlFor={`budget-radio-${index}`}
                className="text-base font-light text-line checkbox-label cursor-pointer"
              >
                {item.label}
              </label>
            </div>
          );
        })}
      </fieldset>
      {error?.budget && <p className="text-red-500 mt-5">{error.budget}</p>}

      {/* Discount */}
      <p className="font-semibold text-base mt-lg">Discount</p>
      <p className="text-base text-line font-light mt-md">
        Tell us more about you - who are you in this vast universe, and what project do you want to
        make a reality?
      </p>

      <fieldset id="discount" className="mt-lg flex flex-col gap-3">
        {discounts.map((discount, index) => (
          <div key={discount.id} className="flex items-center">
            <input
              id={`discount-radio-${index}`}
              type="radio"
              value={discount.value}
              onChange={(e) => {
                setSelectedDiscount(e?.target.value);
                error?.discount && setError({});
              }}
              name="discount-radio"
              className="w-4 h-4 appearance-none bg-main rounded-full bg-clip-content border-[1px] border-line hover:border-[#5c5c5c] checked:p-[2px] checked:bg-black checked:border-black checked:hover:bg-black checked:hover:border-black"
            />
            <label
              htmlFor={`discount-radio-${index}`}
              className="ms-2 text-base font-light text-line"
            >
              {discount.label}
            </label>
          </div>
        ))}
      </fieldset>
      {error?.discount && <p className="text-red-500 mt-5">{error.discount}</p>}

      <Divider />

      <p className="text-base text-line font-light">
        Leave a request on this page, and we will contact you within 24 business hours to discuss
        your project.
      </p>

      <div className="mt-lg">
        {isSent ? (
          <p className="py-3">Thank you for your message</p>
        ) : (
          <div
            className={`py-3 rounded-full bg-background inline-block transition-all transform duration-500 hover:scale-105`}
          >
            {isLoading ? (
              <div className="px-4 py-[2px]">
                <Spinner />
              </div>
            ) : (
              <input
                type="submit"
                value="Send Message"
                className="px-6 text-white cursor-pointer"
              />
            )}
          </div>
        )}
      </div>
    </form>
  );
};
