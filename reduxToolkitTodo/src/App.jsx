import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  //wrapper hum log main.jsx mai laga rhe h
  return (
    <>
     <h1>Hello</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
