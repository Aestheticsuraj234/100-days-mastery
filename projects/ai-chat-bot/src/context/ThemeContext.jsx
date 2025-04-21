import React , {createContext , useContext , useEffect} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const ThemeContext = createContext(undefined);


export const useTheme = ()=>{
    const context = useContext(ThemeContext)

    return context
}



export const ThemeProvider = ({children})=>{
const [theme , setTheme] = useLocalStorage("theme" , "light")

const toggleTheme = ()=>{
    setTheme(theme ==="light" ? "dark" : "light")
}

useEffect(()=>{
    const root = window.document.documentElement;
    root.classList.remove("light" , "dark");
    root.classList.add(theme)
},[theme])

return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}