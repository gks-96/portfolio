"use client";
import React, { createContext, useEffect, useState } from 'react'

type Theme= "light"| "dark";
const ThemeContext = createContext<ThemeContexType| null>(null);
type ThemeContextProviderProps = {
    children:React.ReactNode; 
};
type ThemeContexType= {
    theme: Theme; 
    toggleTheme: () => void; 
}
export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    

    const [theme,setTheme] = useState<Theme>("light");
    const toggleTheme= () =>{

        if ( theme === 'light')
        {
            setTheme("dark");
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
        }
        else{
            setTheme("light");
            window.localStorage.setItem("theme","light");

            document.documentElement.classList.remove("dark");
        }

    }

    useEffect( () =>{
        const localTheme= window.localStorage.getItem('theme') as Theme | null;
        if ( localTheme)
        {
            setTheme(localTheme);
            if ( localTheme ==="dark")
            {
                document.documentElement.classList.add("dark");
            }
        }else if(window.matchMedia("(prefer-color-scheme:dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add("dark");
        }
    },[]);
  return (
    <ThemeContext.Provider value= {{
        theme,
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}
export function useTheme() {
    const context = React.useContext(ThemeContext);
    if ( context == null)
    {
        throw new Error("useTheme must be used withina ThemeContext");
    }
    return context; 
}
