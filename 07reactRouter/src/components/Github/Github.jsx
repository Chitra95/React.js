import React, { useEffect,useState } from 'react'
//components-Github-Github.jsx
//Header.jsx    li add kiya
//main.jsx      Github import and Route add kiya

//to use data value for loader
import { useLoaderData } from 'react-router-dom'


  function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])

    // //Call Api when component is loaded 
    // useEffect( ()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then( (res)=>res.json() )
    //     .then( (data)=>{
    //         console.log(data);
    //         setData(data)
    //     } )
    // },[])   

//more optimized way fetching data and keeping in cache if cursor come to the link even before clicking on navbar ==using loader in main.jsx
//even before useEffect    
  return (
    <div className='bg-gray-400 m-4 p-4 text-3xl text-black text-center'>Github Followers:{data.followers}
    <img  src={data.avatar_url} width={300} />
    
    </div>
  )
}

export default Github

//calling methods in this file only so that same route mai ho 
//usually better practice is if other file is used to write methods
export const githubInfoLoader=async ()=>{
     const response=await fetch("https://api.github.com/users/hiteshchoudhary")
     //promise ko return kr rhe h jo future mai fulfill hoga   
     return response.json()
}

