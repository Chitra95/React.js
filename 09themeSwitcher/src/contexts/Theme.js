import { createContext,useContext } from "react";

//context create karo and export karo
//last project mai create context mai koi value nhi dale but yaha pe default value daal rhe h
//but UserContextProvider.jsx mai [user,setUser]   user-variable and setUser-method hai

export const ThemeContext=createContext({
    themeMode:"light", //bydefault agr koi call karo tho ye value ho and 2methods bhi de rhe h
    //2functions de rhe h
    //we can give variables also and function also
    darkTheme:()=>{},
    lightTheme:()=>{},
    
})

//now writing provider in same file
//ThemeProvider is exporting a variable ThemeContext
export const ThemeProvider=ThemeContext.Provider
//ThemeProvider is used for wrapping

//creating custom hooks and exporting
export default function useTheme(){
    return useContext(ThemeContext)
}

//now you dont need 2 imports everywhere