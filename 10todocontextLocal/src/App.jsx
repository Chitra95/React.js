import { useState,useEffect} from 'react'
import {TodoProvider} from "./contexts"
import {TodoForm} from "./components"
import {TodoItem} from "./components"
import './App.css'


function App() {
  const [todos,setTodos]=useState([]) //empty array bcz loop lagega tho problm na ho

  //defining methods present in "TodoProvider" 
  //give same name so that usmai ye functionality ja sake
  //  "todo" is a string value 
  const addTodo=(todo)=>{
    //  setTodos(todo) ----all existing value will be removed and this value will be added
    //to get previous state value we are using "prev"
    //aftr getting previous value ,create array and add "old and new Values"
    //to add previous value "...prev"
    // setTodos( (prev)=>[todo,...prev]) //direct todo-string add nhi kr skte bcz "id,todo,completed" ye sab dena h in object
    //"{id:Data.now(),...todo}"  creating id for looping,and ...todo-is object-- taking remaing values as it is
    setTodos( (prev)=>[{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo=(id,todo)=>{ 
    //todos is an array ,loop to get id that needs to be updated
    //each todo is an object,and each object has an id
    //prevTodo is individual todo
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo )) )
    //agr prevTodo.id se match hui id thn "new todo add karo : varna old todo"
  }

  //while deleting map is not good option
  //delete means whole group mai se vo ek value nhi h
  // [old array]   [new array]
  //new array mai vo value nhi chahiye jo id se match ho
  //so use FILTER
  const deleteTodo=(id)=>{
    setTodos( (prev)=>prev.filter( (todo)=>todo.id !== id )) //todo.id match nhi hona chaiye id se
    //jo match nhi karega id se vo new array mai add hoga
    //match hua tho vo add nhi hoga new array mai
  }

  //for toogle you need to go inside object and completed ki value ko toggle krna hoga
  const toggleComplete=(id)=>{
    // console.log("hello");
    setTodos( (prev)=>prev.map( (prevTodo)=>prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo))
    //setTodos( (prev)=>prev.map( (prevTodo)=> prevTodo.id===id ? "true" :"false"))
    //"false mai prevTodo" ko as it is rehne do
    //"true mai {...prevTodo, completed:!prev.completed}" 
    // object{} ...prevTodo-previous value as it is rakho and sirf ek value update karo "completed" usmai sirf reverse krna h old value ko "oldvalue-prevTodo.completed"
  }


  //we must load those todo jo already present h when application is loaded
  //so use---useEffect
  useEffect(() => {
    //to bring old values you can access local storage when you are in react,and working in browers ,hum server side ki baat nhi kr rhe h
    const todos=JSON.parse(localStorage.getItem("todos")) //get krte time "key" dena hota h and vo string mai aata h data so hum convert kar rhe h in JSON

    //to set values -pehle check karo "todos" naam ka kuch hai ki nhi 
    //bcz agar todos name se kn h tho kaha pe set karenge crash ho jayega application
    // todos is an array-and usmai objects h so length dekh rhe h
    if (todos && todos.length >0){
      setTodos(todos)
    }
  }, [])
 
  //we can use multiple useEffect
  //when values get added in todo-i want to add in local storage
  //add in local storage if it goes into "todos" ye ---const [todos,setTodos]=useState([])
  //it is going through CONTEXTAPI but usmai ye"TodoProvider value=todo" hai hi yaha kuch change ho tho ismai jayega[todos,setTodos] and yaha se useEffect se add karenge in local storage
  useEffect( ()=>{
    localStorage.setItem("todos",JSON.stringify(todos)) //add karo in string format
  },[todos])


  //to write functionality first we need TodoProvider bcz everthing is wrapped there
  //and give value in "TodoProvider" to use values
  return (
    // destructuring { {}}
    <TodoProvider value={ {todos,addTodo,updateTodo,deleteTodo,toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                       <TodoForm/>
                    </div>

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* context se jo "todos" aaye uspe loop lagana h and loop ke andar TodoItem ko "prop" bhi pass karenge and usko call bhi karenge */}

                        {/* writing javascript */}
                        {/* curly braces denge tho return keyword use krna padega so () auto return karega */}
                        {todos.map( (todo)=> (
                          // we know ye div baar baar loop hoga and to make it unique pass "key"
                          //avoid giving index
                          //if database mai 3rd value gayab hua tho array destructure karega but keys ko sab ko destructure karna padega
                          //unique id h tho vo ek element gayab hoga
                          // <TodoItem todo={todo}/>  usko ek component prop pass karna hoga
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/> 
                          </div>
                        ))}
                    </div>
          </div>
       </div>
    </TodoProvider>
  )
}

export default App
