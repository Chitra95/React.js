//core redux se import kiye

/* 
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({}) 
*/

//itna code likhke todoSlice.js poora code krke
//firse idr aaye


import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

//store ko reducer ka awareness dena h
export const store=configureStore({
    reducer:todoReducer
})

//functionality todoSLice.js mai likh diye 
//todo mai addTodo and todo ki list
//addTodo-how to send data into store
//remove todo /todo ki list -- how get data

//its time to make components