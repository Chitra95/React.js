import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function YourProfile() {
    const {user}=useContext(UserContext)

    if (!user) return <div>Please login in</div>
  
    return <div>Welcome {user.username}</div>
}

export default YourProfile




