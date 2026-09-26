"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cardprovider } from "@/context/Cardcontext";

const MYPlanPage = () => {
  const context = useContext(Cardprovider);

  const [sort, setSort] = useState<"duration" | "calories" | "name">(
    "duration"
  );
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  if (!context) return null;

  const { todayPlan, saved, removeWorkout } = context;

  const currentExercises = activeTab === "today" ? todayPlan : saved;

  const sortedExercises = [...currentExercises].sort((a, b) => {
    if (sort === "duration") {
      return a.duration - b.duration;
    }

    if (sort === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.name.localeCompare(b.name);
  });

  const totalMinutes = currentExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <section className="container mx-auto px-4 py-5 sm:px-5 sm:py-6 lg:px-6">
  
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          MY PLAN
        </h1>

        <p className="pt-2 text-xs leading-5 text-[#8A92A0] sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>


      <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#252830] bg-[#111318]">
        <div className="border-r border-[#20232A] px-3 py-3 sm:px-5 sm:py-4">
          <p className="text-[9px] text-[#6F7682] sm:text-[10px]">
            Exercises
          </p>

          <h2 className="mt-1 text-xl font-bold text-[#C2F800] sm:text-2xl">
            {currentExercises.length}
          </h2>
        </div>

        <div className="border-r border-[#20232A] px-3 py-3 sm:px-5 sm:py-4">
          <p className="text-[9px] text-[#6F7682] sm:text-[10px]">
            Minutes
          </p>

          <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {totalMinutes}
          </h2>
        </div>

        <div className="px-3 py-3 sm:px-5 sm:py-4">
          <p className="text-[9px] text-[#6F7682] sm:text-[10px]">
            Calories
          </p>

          <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {totalCalories}
          </h2>
        </div>
      </div>

  
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit overflow-hidden rounded-md border border-[#292D35] bg-[#15171C] text-[10px]">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-2 sm:px-5 sm:py-1 ${
              activeTab === "today"
                ? "border border-[#283A4A] bg-[#102030] text-[#C2F800]"
                : "text-[#A1A6AF]"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 sm:px-5 sm:py-1 ${
              activeTab === "saved"
                ? "border border-[#283A4A] bg-[#102030] text-[#C2F800]"
                : "text-[#A1A6AF]"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#6F7682]">
          <span>Sort By</span>

          <select
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value as "duration" | "calories" | "name"
              )
            }
            className="rounded-md border border-[#292D35] bg-[#15171C] px-2 py-2 text-[#A1A6AF] outline-none sm:py-1"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>


      <div className="mt-4">
        {currentExercises.length === 0 ? (
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-lg border border-dashed border-[#242830] bg-[#0D0F13] px-4 text-center">
            <h2 className="text-sm font-bold text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-1 text-[10px] text-[#6F7682]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workouts"
              className="mt-3 rounded-full bg-[#C2F800] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#d4ff32]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="w-full rounded-xl border border-[#292D35] bg-[#191C22] p-3"
              >
            
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                 
                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-[72px] sm:w-[108px]">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      className="object-cover"
                    />
                  </div>

             
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-bold text-white">
                      {exercise.name}
                    </h2>

                    <p className="mt-0.5 text-[11px] text-[#8A92A0]">
                      {exercise.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px]">
                      <span className="flex items-center gap-1 text-[#C2F800]">
                        <span>◷</span>
                        {exercise.duration} min
                      </span>

                      <span className="flex items-center gap-1 text-[#C2F800]">
                        <span>♨</span>
                        {exercise.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1 text-[#C2F800]">
                        <span>★</span>
                        {exercise.rating}
                      </span>
                    </div>
                  </div>

            
                  <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto">
                    <Link
                      href={`/workouts/${exercise.id}`}
                      className="flex-1 rounded-full border border-[#BFC4CC] px-3 py-2 text-center text-[10px] font-semibold text-white transition hover:bg-[#252830] sm:flex-none sm:py-1.5"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeWorkout(exercise.id, activeTab);
                      }}
                      className="flex-1 rounded-full bg-[#C2F800] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#D5FF3D] sm:flex-none sm:px-4 sm:py-1.5"
                    >
                      ✓ Mark as Done
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeWorkout(exercise.id, activeTab);
                      }}
                      className="ml-0 px-1 text-lg text-[#A1A6AF] hover:text-white sm:ml-1"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MYPlanPage;