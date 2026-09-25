
"use client";

import { AType } from "@/Components/type/page";
import React, { createContext, useState } from "react";

interface CardContextType {
  todayPlan: AType[];
  setTodayPlan: React.Dispatch<React.SetStateAction<AType[]>>;

  saved: AType[];
  setSaved: React.Dispatch<React.SetStateAction<AType[]>>;

  removeWorkout: (id: number) => void;
}

export const Cardprovider = createContext<CardContextType | undefined>(
  undefined
);

const Cardcontext = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<AType[]>([]);
  const [saved, setSaved] = useState<AType[]>([]);

  const removeWorkout = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );

    setSaved((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const contextValue = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
    removeWorkout,
  };

  return (
    <Cardprovider.Provider value={contextValue}>
      {children}
    </Cardprovider.Provider>
  );
};

export default Cardcontext;
