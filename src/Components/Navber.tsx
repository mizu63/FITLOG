
"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLogo from "@/assist/logo.png";
import { usePathname } from "next/navigation";

import { Cardprovider } from "@/context/Cardcontext";

const Navbar = () => {
  const context = useContext(Cardprovider);

  if (!context) return null;

  const { todayPlan, saved } = context;

  const links = {
    workout: "/workouts",
    myplan: "/myplan",
  };

  const pathname = usePathname();

  return (
    <section className="container mx-auto px-3 sm:px-5">
      <nav className="flex items-center justify-between gap-3 py-4 sm:py-5">

  
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src={ImageLogo}
            alt="Logo"
            className="h-auto w-auto"
          />

          <h1 className="text-[16px] leading-5 text-[#FFFFFF] sm:text-[18px]">
            FITLOG
          </h1>
        </Link>

   
        <ul className="flex items-center gap-1.5 sm:gap-4 md:gap-6">
          <li
            className={`text-[10px] font-medium leading-3 sm:text-[12px] ${
              pathname === links.workout
                ? "rounded-2xl bg-[#1A2312] px-3 py-1.5 text-[#C2F800] sm:px-6"
                : "text-[#9CA3AF]"
            }`}
          >
            <Link href={links.workout}>
              Workouts
            </Link>
          </li>

          <li
            className={`text-[10px] font-medium leading-3 sm:text-[12px] ${
              pathname === links.myplan
                ? "rounded-2xl bg-[#1A2312] px-3 py-1.5 text-[#C2F800] sm:px-6"
                : "text-[#9CA3AF]"
            }`}
          >
            <Link href={links.myplan}>
              My Plan
            </Link>
          </li>
        </ul>

   
        <Link
          href={links.myplan}
          className="shrink-0"
        >
          <div className="flex items-center gap-1 sm:gap-2.5">

            <div className="flex items-center gap-1 px-1 py-1.5 text-[9px] font-medium leading-3 text-[#D1D5DB] sm:px-2 sm:text-[12px]">
              <span className="hidden xs:inline sm:inline">
                Plan
              </span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[9px] text-black">
                {todayPlan.length}
              </span>
            </div>

            <div className="flex items-center gap-1 px-1 py-1.5 text-[9px] font-medium leading-3 text-[#D1D5DB] sm:px-2 sm:text-[12px]">
              <span className="hidden xs:inline sm:inline">
                Saved
              </span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[9px] text-black">
                {saved.length}
              </span>
            </div>

          </div>
        </Link>

      </nav>
    </section>
  );
};

export default Navbar;
