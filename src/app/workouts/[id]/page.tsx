
import Saved from "@/Components/Button/Saved";
import TodayPlan from "@/Components/Button/TodayPlan";
import Image from "next/image";
import { notFound } from "next/navigation";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

interface Exercise {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

async function getExercise(id: string): Promise<Exercise | null> {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises: Exercise[] = await res.json();

  return (
    exercises.find(
      (exercise) => exercise.id === Number(id)
    ) ?? null
  );
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const exercise = await getExercise(id);

  if (!exercise) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] px-3 py-5 text-white sm:px-5 sm:py-6">
      <div className="mx-auto flex min-h-screen max-w-[900px] items-center">
        <div className="grid w-full overflow-hidden rounded-lg bg-[#111419] md:grid-cols-[48%_52%]">

   
          <div className="relative h-[280px] w-full sm:h-[380px] md:h-[550px]">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>

      
          <div className="p-4 sm:p-6">

          
            <h1 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">
              {exercise.name}
            </h1>

       
            <p className="mt-2 text-xs leading-5 text-gray-400">
              {exercise.description}
            </p>

          
            <div className="mt-3 inline-block rounded-full bg-[#d9ff00] px-3 py-1 text-[9px] font-bold uppercase text-black">
              {exercise.difficulty}
            </div>

    
            <div className="mt-4 overflow-hidden rounded-md border border-[#292d34]">

              <div className="grid grid-cols-[40%_60%] border-b border-[#292d34]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Equipment
                </div>

                <div className="break-words px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  {exercise.equipment}
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%] border-b border-[#292d34]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Difficulty
                </div>

                <div className="px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  {exercise.difficulty}
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%] border-b border-[#292d34]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Sets
                </div>

                <div className="px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  {exercise.sets}
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%] border-b border-[#292d34]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Reps
                </div>

                <div className="break-words px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  {exercise.reps}
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%] border-b border-[#292d34]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Duration
                </div>

                <div className="px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  {exercise.duration} min
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%] border-b border-[#292d34]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Calories
                </div>

                <div className="px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  {exercise.caloriesBurned} kcal
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%]">
                <div className="px-2 py-2 text-[8px] font-bold uppercase text-gray-500 sm:px-3">
                  Rating
                </div>

                <div className="px-2 py-2 text-[10px] text-gray-200 sm:px-3">
                  ⭐ {exercise.rating}
                </div>
              </div>

            </div>

         
            <h2 className="mt-5 text-[10px] font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-2 list-decimal space-y-1 pl-5 text-[10px] leading-4 text-gray-300">
              {exercise.instructions.map(
                (instruction, index) => (
                  <li key={index}>
                    {instruction}
                  </li>
                )
              )}
            </ol>

          
            <div className="mt-5 flex w-full flex-col gap-2 sm:flex-row">
              <TodayPlan exercise={exercise} />

              <Saved exercise={exercise} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

