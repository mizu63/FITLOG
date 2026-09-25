
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
    <section className="container mx-auto">
      <nav className="flex justify-between items-center py-5 px-1">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={ImageLogo} alt="Logo" />

          <h1 className="text-[18px] text-[#FFFFFF] leading-5">
            FITLOG
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6">
          <li
            className={`text-[12px] leading-3 font-medium ${
              pathname === links.workout
                ? "text-[#C2F800] bg-[#1A2312] py-1.5 px-6 rounded-2xl"
                : "text-[#9CA3AF]"
            }`}
          >
            <Link href={links.workout}>
              Workouts
            </Link>
          </li>

          <li
            className={`text-[12px] leading-3 font-medium ${
              pathname === links.myplan
                ? "text-[#C2F800] bg-[#1A2312] py-1.5 px-6 rounded-2xl"
                : "text-[#9CA3AF]"
            }`}
          >
            <Link href={links.myplan}>
              My Plan
            </Link>
          </li>
        </ul>

        {/* Plan & Saved */}
        <Link href={links.myplan}>
          <div className="flex items-center gap-2.5">

            <div className="flex items-center gap-1 text-[12px] font-medium leading-2.5 text-[#D1D5DB] py-2 px-4">
              Plan

              <span className="bg-[#C2F800] text-black w-5 h-5 rounded-full flex items-center justify-center">
                {todayPlan.length}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[12px] font-medium leading-2.5 text-[#D1D5DB] py-2 px-4">
              Saved

              <span className="bg-[#C2F800] text-black w-5 h-5 rounded-full flex items-center justify-center">
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

