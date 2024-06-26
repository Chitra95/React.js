//no jsx so only .js extension
// to create context we need -createContext,useContext
//provider vala drama nhi krna h tho useContext lagega

import { createContext,useContext } from "react";

export const TodoContext=createContext({
    //giving default value in array so abi loop lagana padega
    //properties
    //component kuch bhi ho value ye "todo" se hi lenge
 
    todo:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        },  
    ],
    //functionality but only declaration
    //todo is "Todo msg"
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

//directly creating and exporting hook
export const useTodo=()=>{
    return useContext(TodoContext)
}

//for "provider" to wrap
export const TodoProvider=TodoContext.Provider