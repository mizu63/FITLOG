"use client";

import { AType } from "@/Components/type/page";
import React, { createContext, useEffect, useState } from "react";

interface CardContextType {
  todayPlan: AType[];
  setTodayPlan: React.Dispatch<React.SetStateAction<AType[]>>;

  saved: AType[];
  setSaved: React.Dispatch<React.SetStateAction<AType[]>>;

  removeWorkout: (id: number, type: "today" | "saved") => void;
}

export const Cardprovider = createContext<CardContextType | undefined>(
  undefined
);

const Cardcontext = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<AType[]>([]);
  const [saved, setSaved] = useState<AType[]>([]);


  // **********************************


 const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const storedTodayPlan = localStorage.getItem("todayPlan");
  const storedSaved = localStorage.getItem("saved");

  if (storedTodayPlan) {
    setTodayPlan(JSON.parse(storedTodayPlan));
  }

  if (storedSaved) {
    setSaved(JSON.parse(storedSaved));
  }

  setIsLoaded(true);
}, []);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
  localStorage.setItem("saved", JSON.stringify(saved));
}, [todayPlan, saved, isLoaded]);




  //  **********************

  
  const removeWorkout = (id: number, type: "today" | "saved") => {
    if (type === "today") {
      setTodayPlan((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
    }

    if (type === "saved") {
      setSaved((prev) =>
        prev.filter((workout) => workout.id !== id)
      );
    }
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