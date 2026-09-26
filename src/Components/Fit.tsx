
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/Components/Banner";
import { AType } from "@/Components/type/page";

const getWorkouts = async (): Promise<AType[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: AType[] = await res.json();

  return data;
};

const workoutsPage = async () => {
  const workouts = await getWorkouts();

  return (
    <>
      <section className="bg-[#111214] py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6">

    
          <div className="mb-5 sm:mb-6">
            <h2 className="text-[24px] font-bold text-[#FFFFFF] sm:text-[28px] lg:text-[30px]">
              THE LIBRARY
            </h2>

            <p className="mt-1 text-[12px] font-normal text-[#9CA3AF] sm:text-[13px] lg:text-[14px]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {workouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workouts/${workout.id}`}
                className="block overflow-hidden rounded-lg bg-[#16181D] transition duration-200 hover:scale-[1.02]"
              >

          
                <div className="relative h-[190px] w-full sm:h-[200px] lg:h-[180px]">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

          
                <div className="p-3 sm:p-4">

            
                  <div className="mb-2 mt-1 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="rounded-full bg-[#C2F800] px-2 py-[3px] text-[9px] font-bold text-black sm:text-[10px] lg:text-[11px]"
                      >
                        {muscle.toUpperCase()}
                      </span>
                    ))}
                  </div>

          
                  <h3 className="text-[16px] font-bold uppercase text-white sm:text-[17px] lg:text-[18px]">
                    {workout.name}
                  </h3>

           
                  <p className="mt-1 text-[11px] font-normal text-[#9CA3AF] sm:text-[12px]">
                    {workout.equipment}
                  </p>

         
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#24262C] pt-2">

                    <span className="text-[11px] font-normal text-[#9CA3AF] sm:text-[12px]">
                      ◷ {workout.duration} min
                    </span>

                    <span className="text-[11px] font-normal text-[#9CA3AF] sm:text-[12px]">
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span className="text-[11px] font-normal text-[#9CA3AF] sm:text-[12px]">
                      ★ {workout.rating}
                    </span>

                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default workoutsPage;

