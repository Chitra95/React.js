import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    //defining state for individual Todo
    const [todo,setTodo]=useState("")
    //take functionality you want from useTodo()
    const {addTodo}=useTodo()

    //writing method 
    const add=(e)=>{
        e.preventDefault()
        // console.log("hi");

        //there must be something in todo
        //agar kuch nhi h simply return kardo
        if (!todo) return

        //agar values hai
        // addTodo(todo) ye galat h directly giving string, usmai array object dono spread kr rhe h in functionality
        //passing object bcz array ke andar objects h
        // addTodo( {id:Date.now(),todo:todo,completed:false})
        // bt vaha humne Date.now() diya h ,and in new syntax if field name and value name is same todo:todo and write once
        


        addTodo({todo,completed:false})

        //field jaha se ye "todo" aya usko empty bhi krna hoga "input field ko"
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                //wiring input ko state ke saat
                value={todo}

                //if any change occur
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

