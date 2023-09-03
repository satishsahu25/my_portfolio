import { useState,createContext, useContext } from "react";



const Themecontext=createContext();




//creating provider
const ThemeProvider=({children})=>{
    const [theme,setheme]=useState('light');

    return (
        <Themecontext.Provider value={[theme,setheme]}>
            {children}
        </Themecontext.Provider>
    )
}

//custom hook
const useTheme=()=>useContext(Themecontext);

export {useTheme,ThemeProvider};