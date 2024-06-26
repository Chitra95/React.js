

import './App.css'
//first import
//thn use as wrapper
//making components so that usmai use kar sake
//src-components-Login.jsx and Profile.jsx

import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import YourProfile from './Components/YourProfile'


function App() {
  

  return (
    <>
    <UserContextProvider>
     <h1>React aur Chai</h1>
     <Login/>
     <YourProfile/>
     </UserContextProvider>
    </>
  )
}

export default App
