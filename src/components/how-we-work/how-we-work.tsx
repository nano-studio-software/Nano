import Link from "next/link";
import steps from "@data/application-steps.json";

export const HowWeWork = () => {
  return (
    <div
      className="flex justify-between mt-[80px] mb-[130px] gap-[40px] max-xl:gap-[16px] overflow-x-scroll snap-x"
      style={{ scrollbarWidth: "none" }}
    >
      {steps.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={item.id}
            className={`h-[fit-content] max-sm:w-[80%] flex flex-col pl-4 border-l max-sm:shrink-0 max-sm:snap-start ${isLast ? "border-r pr-[40px] max-xl:pr-[16px]" : ""} ${isFirst ? "border-black" : ""}`}
          >
            <p className="text-background whitespace-pre text-2xl font-light">{item.title}</p>
            <p className="mt-[40px] text-line text-base max-lg:text-sm font-light ">
              {item.content}
            </p>

            {isFirst && (
              <Link href="/contact" className="mt-[50px]">
                <p className="pb-1 text-base max-lg:text-sm border-b border-black w-[fit-content] ">
                  Submit you&apos;r project
                </p>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};
