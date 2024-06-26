import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter=15
let [counter,setCounter]=useState(15)
const addValue=()=>{
  // counter=counter+1
  if(counter<20) setCounter(counter+1)
    /*setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)*/

    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    


    
  // console.log("Clicked",counter);
}

const removeValue=()=>{
  // counter=counter-1
  if(counter>0)
  setCounter(counter-1)
  // console.log("Clicked",counter);
}

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
