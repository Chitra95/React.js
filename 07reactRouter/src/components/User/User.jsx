import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    //To capture paarmeters it is important to use useParams
    const {id} =useParams()
  return (
    <div className='bg-gray-500 text-3xl text-white text-center'>User: {id}</div>   //same {id} in main.jsx
  )
}

export default User