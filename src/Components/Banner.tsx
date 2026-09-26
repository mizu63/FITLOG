
import React from "react";
import Image from "next/image";
import ImageBanner from "@/assist/banner.png";

const Banner = () => {
  return (
    <section className="mt-5 px-3 sm:mt-8 sm:px-5 lg:mt-10">
      <div className="container mx-auto flex flex-col justify-between gap-8 rounded-2xl bg-[#1F2937] p-5 pt-10 pb-8 sm:p-8 lg:flex-row lg:p-12 lg:pt-16 lg:pb-10">

  
        <div className="flex-1">
          <h2 className="pb-4 text-[10px] font-bold leading-none text-[#C2F800] sm:text-[11px]">
            WORKOUT LIBRARY
          </h2>

          <h1 className="mt-2 text-[36px] font-bold leading-tight text-[#D1D5DB] sm:text-[48px] lg:text-[60px]">
            TRAIN WITH INTENT LOG.
            <br className="hidden sm:block" />
            EVERY SET.
          </h1>

          <p className="pt-4 pb-6 text-[13px] leading-5 text-[#9CA3AF] sm:text-[14px] lg:text-[16px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            <br className="hidden sm:block" />
            into today's plan, and watch the week's work add up.
          </p>

          <button className="rounded-md bg-[#C2F800] px-5 py-3 text-[11px] font-bold text-[#000000] transition duration-300 hover:bg-[#a8d500] sm:px-6 sm:text-[12px]">
            BROWSE WORKOUTS
          </button>
        </div>


        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <Image
            src={ImageBanner}
            alt="Banner"
            className="mt-0 h-auto w-full max-w-[420px] object-contain sm:max-w-[480px] lg:mt-6 lg:max-w-[500px]"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
