import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
// to send data in Context
//we need useState
function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    
    //"setUser" to add value in Context 
    //see in UserContextProvider
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault() //if  we submit bydefault value url ke through kahi chali jati h wedont want that
        setUser({username,password}) //sending data
    }
  return (
     
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e)=> setUsername(e.target.value) }
        type="text" 
        placeholder='username'/>
        
        {" "} 
        {/* for space */}
        <input 
         value={password}
         onChange={(e)=> setPassword(e.target.value) }
        type="text" placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login


