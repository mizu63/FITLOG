
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLogo from "@/assist/logo.png";

const Footer = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-3 py-5 sm:flex-row sm:gap-0">

      
        <div className="flex items-center gap-2.5">
          <Link href="/">
            <Image
              src={ImageLogo}
              alt="Logo"
              className="h-auto w-auto"
            />
          </Link>

          <h1 className="text-[18px] leading-5 text-[#FFFFFF]">
            FITLOG
          </h1>
        </div>

   
        <div className="text-center sm:text-right">
          <h3 className="text-[10px] font-normal leading-4 text-[#6B7280] sm:text-[12px]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Footer;
