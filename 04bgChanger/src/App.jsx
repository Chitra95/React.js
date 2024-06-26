import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState("orange")

  return (
    <>
    
      <div className='w-full h-screen duration-200' style={ {backgroundColor:color} }>
      <h1 className='text-5xl color text-white'  >Background Color Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' 
      /*style={ {backgroundColor:"pink"}}*/  >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={ {backgroundColor:"red"}} //buttton ka bg h
          >RED
          </button>

          <button onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={ {backgroundColor:"blue"}}
          >BLUE
          </button>

          <button onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={ {backgroundColor:"green"}}
          >GREEN
          </button>
        </div>

      </div>
      </div>
    </>
  )
}

export default App
