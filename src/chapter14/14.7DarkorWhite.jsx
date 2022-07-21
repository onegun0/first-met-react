import React from "react";
import { useCallback,useState } from "react";
import MainContent from "./14.7MainContent";
import ThemeContext from "./14.7Themecontext";

function DarkOrLight(props){
    const [theme,setTheme]=useState("light");
    const toggleTheme = useCallback(()=>{
        if(theme=="light"){
            setTheme("dark");
        }else if (theme=="dark"){
            setTheme("light");
        }
    },[theme]);
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    )
}
export default DarkOrLight;