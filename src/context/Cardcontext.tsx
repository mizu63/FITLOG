"use client";

import { AType } from "@/Components/type/page";
import React, { createContext, useState } from "react";

interface CardContextType {
  todayPlan: AType[];
  setTodayPlan: React.Dispatch<React.SetStateAction<AType[]>>;

  saved: AType[];
  setSaved: React.Dispatch<React.SetStateAction<AType[]>>;
}

export const Cardprovider = createContext<CardContextType | undefined>(
  undefined
);

const Cardcontext = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<AType[]>([]);
  const [saved, setSaved] = useState<AType[]>([]);

  const contextValue = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
  };

  return (
    <Cardprovider.Provider value={contextValue}>
      {children}
    </Cardprovider.Provider>
  );
};

export default Cardcontext;