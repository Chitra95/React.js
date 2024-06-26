
import { useEffect, useState } from 'react'
import './App.css'
import {  ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
const [themeMode,setThemeMode]=useState("light")

//darkTheme and lightTheme ko humne functionality nhi di h in Theme.js
//bt agar yaha same name se define karenge tho vo functionality jayegi uss mai
const lightTheme=()=>{
  setThemeMode("light")
}
const darkTheme=()=>{
  setThemeMode("dark")
}

//actual change in theme
useEffect( ()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
},[themeMode] )

  return (
  // Wrappping karo and values bhi dena hoga na to access them "themeMode,darkTheme,lightTheme" 
  //themebtn and card dono ko access h
  <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">      
  <div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
       {/* Theme button */}
       <ThemeBtn/>
    </div>

    <div className="w-full max-w-sm mx-auto">
        {/* Card */}
        <Card/>
    </div>
  </div>
 </div>
 </ThemeProvider>

  )
}

export default App
