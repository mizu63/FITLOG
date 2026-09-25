"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { Cardprovider } from "@/context/Cardcontext";

const MYPlanPage = () => {
  const context = useContext(Cardprovider);

  if (!context) return null;

  const { todayPlan } = context;

  const totalMinutes = todayPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <section className="container mx-auto px-4 py-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">MY PLAN</h1>

        <p className="pt-2 text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Summary */}
      <div className="mt-5 grid grid-cols-3 rounded-xl border border-[#252830] bg-[#111318]">
        {/* Exercises */}
        <div className="border-r border-[#20232A] px-5 py-4">
          <p className="text-[10px] text-[#6F7682]">Exercises</p>

          <h2 className="mt-1 text-2xl font-bold text-[#C2F800]">
            {todayPlan.length}
          </h2>
        </div>

        {/* Minutes */}
        <div className="border-r border-[#20232A] px-5 py-4">
          <p className="text-[10px] text-[#6F7682]">Minutes</p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            {totalMinutes}
          </h2>
        </div>

        {/* Calories */}
        <div className="px-5 py-4">
          <p className="text-[10px] text-[#6F7682]">Calories</p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            {totalCalories}
          </h2>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex overflow-hidden rounded-md border border-[#292D35] bg-[#15171C] text-[10px]">
          <button className="border border-[#283A4A] bg-[#102030] px-3 py-1 text-[#C2F800]">
            Today's Plan
          </button>

          <button className="px-5 py-1 text-[#A1A6AF]">
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[#6F7682]">
          <span>Sort By</span>

          <select className="rounded-md border border-[#292D35] bg-[#15171C] px-2 py-1 text-[#A1A6AF] outline-none">
            <option>Duration</option>
            <option>Calories</option>
            <option>Name</option>
          </select>
        </div>
      </div>

      {/* Workout List / Empty State */}
      <div className="mt-4">
        {todayPlan.length === 0 ? (
          <div className="flex min-h-[145px] flex-col items-center justify-center rounded-lg border border-dashed border-[#242830] bg-[#0D0F13]">
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
            {todayPlan.map((exercise) => (
              <div
                key={exercise.id}
                className="flex items-center justify-between rounded-lg border border-[#252830] bg-[#111318] px-5 py-4"
              >
                <div>
                  <h2 className="font-semibold text-white">
                    {exercise.name}
                  </h2>

                  <p className="mt-1 text-xs text-[#6F7682]">
                    {exercise.duration} min • {exercise.caloriesBurned} kcal
                  </p>
                </div>

                <span className="rounded-full bg-[#1A1D22] px-3 py-1 text-xs text-[#C2F800]">
                  Added
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MYPlanPage;