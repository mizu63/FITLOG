import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLogo from "@/assist/logo.png";

const Navbar = () => {
    const links = {
        workouts: "/Workouts",
        myplan: "/MyPlan",
    };

    return (
        <section className="container mx-auto">
            <nav className="flex justify-between items-center py-5 px-1">

                <div className="flex items-center gap-2.5">
                    <Link href="/">
                        <Image src={ImageLogo} alt="Logo" />
                    </Link>
                    <h1 className="text-[18px] text-[#FFFFFF] leading-5">
                        FITLOG
                    </h1>
                </div>

                <ul className="flex items-center gap-6">
                    <li className="text-[12px] text-[#9CA3AF] leading-3 font-medium">
                        <Link href={links.workouts}>Workouts</Link>
                    </li>

                    <li className="text-[12px] text-[#9CA3AF] leading-3 font-medium">
                        <Link href={links.myplan}>My Plan</Link>
                    </li>
                </ul>

                <div className="flex items-center gap-2.5">
                    <button className="text-[12px] font-medium leading-2.5 text-[#D1D5DB] py-2 px-4">
                        Plan
                    </button>

                    <button className="text-[12px] font-medium leading-2.5 text-[#D1D5DB] py-2 px-4">
                        Saved
                    </button>
                </div>

            </nav>
        </section>
    );
};

export default Navbar;