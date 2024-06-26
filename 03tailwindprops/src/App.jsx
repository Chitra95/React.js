import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  let obj={
    name:"cc"
  }
  let arr=[1,2,3]
  
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' > Tailwind TEXT</h1>
      <Card username="Chitra" btnText='clickme' />
      <Card username="Sai" />
      
      
    </>
  )
}

export default App
