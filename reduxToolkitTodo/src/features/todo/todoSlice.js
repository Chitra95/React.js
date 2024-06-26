 //after making store  make reducers
 //its little different in redux toolkit --to make reducers we call it Slices

 //src-features-todo-todoSlice.js
 //features-login-todo-product


 //to make slice we need only one method 
 //but we will use 2

 import { createSlice,nanoid } from "@reduxjs/toolkit";
 //for id in todo we took Date.now()
 //so we will use nanoid(method) to generate unique id (it is present in react)

 //initial state is important in store
 //how will the store look -empty or any value already present,or will fetch data from database and put here
const initialState={
    //todos is state
    todos:[
        {
            id:1,
            text:"Hello world"
        }
    ]
} //initialState can be array or object

//making slice
//slice is bigger version of reducer(functionality)
export const todoSlice=createSlice({
    name:"todo", //name is the property

    //every slice has initial state
    initialState,

    //store is incomplete after writing 2lines in store.js bcz of reducers
    //reducers mai property and functions aate h
    reducers:{
        //in contextAPI we used to declare function but never gave definition here
        //but here declaration and definition both must be giver
        //property
        //state-give access to values present in initialState even if initialState chnages in future
        //action-when you get some values eg- when removeTodo is called you need an id and that id is given by action
        addTodo:(state,action)=>{
            const todo={
                    id:nanoid(),
                    text:action.payload 
                    //payload is an object-id,image kuch bhi ho skta h usmai
                    // text:action.payload.text hum usko text naam se hi bhej rhe h so, 2 baar text likhne ki zarurat nhi h
             }
            //ye todo humne banaya h bas vo abi tk initialState mai gya hi nhi
            //we need to update initialState
            state.todos.push(todo) 
            //since "todos" array hai isiliye push 
            //object hai tho property add kr do
        },
        removeTodo:(state,action)=>{
            //state-current state of jo bhi state hai
            //action-mai jo bhi data pass ho rha h

            //to remove "action" ne id tho bheja hi hoga
            state.todos=state.todos.filter( (todo)=>todo.id !== action.payload)

        }
    }
})
//slices have name and remember them when will use redux toolkit in chrome extension vaha pe ye hi naam show hoga


//todoSlice export kr diye but vo aise export nhi hota h
//two parts ko export krna hoga
//1. export functionality-reducers jo hai addTodo,removeTodo isko use krke hi hamesha state ko update karenge
//so ye functionality indiviually kaam ayegi
export const {addTodo,removeTodo}=todoSlice.actions //ye components mai kaam ayega

//store.js ko bhi awareness chahiye about these reducers if no awareness it won't be able to maintain store
//bcz ye restrictive store hai har kisi se value lekr update nhi karta h only registered reducers can update these store
export default todoSlice.reducer

//after this go to store.js
