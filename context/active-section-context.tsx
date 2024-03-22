"use client"

import React,{useState,createContext,useContext} from 'react'
import {links} from "@/lib/data"

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}

//number means it could be anything of them 
type SectionName = typeof links[number]["name"];

type ActiveSectionContextType = {
   activeSection:SectionName; 
   setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>
}
// outside the context provider component , the default value will be picked 
export const ActiveSectionContext = createContext<ActiveSectionContextType| null>(null);
export default function ActiveSectionContextProvider(
  {children} :ActiveSectionContextProviderProps )
   {
  const[activeSection,setActiveSection] = useState<SectionName>("Home");
  return(
    <ActiveSectionContext.Provider value = {{
      activeSection, 
      setActiveSection
    }}>
        {children}
    </ActiveSectionContext.Provider>
    
  ) ;
}
export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);
  if ( context === null)
  {
    throw new Error("useActiveSelectionContext must be used within a Active SectionContext Provider");
  }
  return context
}