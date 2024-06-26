import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';

//{ todo } destructing  prop h ye
function TodoItem({ todo }) {
  //making state
  const [isTodoEditable, setIsTodoEditable] = useState(false) //bydefault editable nhi h

  const [todoMsg, setTodoMsg] = useState(todo.todo) //bydefault value hogi "todo" object mai "todo" property
    //bringing context
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()

    //writing functionality
    const editTodo=()=>{
      // updateTodo(todo.id,todo) aise mt paas karo bcz "todo" object h      
      updateTodo(todo.id,{...todo,todo:todoMsg})   //{...todo,todo:todoMsg} pehle usko spread kr diya ...todo ko then ","  lagake jisko update krna h vo likho
      setIsTodoEditable(false)//update hone ke baad
    }

    //toggleCompleted local method name
    //toggleComplete ye mere context se aane vale value ka name h
    const toggleCompleted=()=>{
      toggleComplete(todo.id)
    }
  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
              
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
