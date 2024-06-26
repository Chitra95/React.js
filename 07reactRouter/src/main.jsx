 import React from 'react'
import ReactDOM from 'react-dom/client'

//dont froget import
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'

//import this
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
//     component,{method}  loaded together

//2ways to make router
//1st way:
 /*  const router=createBrowserRouter([
  //put list of objects
  //1. object is main path uske andr children h
  {
      path:"/",     //    "/" is top leevl element layout(or root)
      element:<Layout/>,
      //for nesting
      children:[
        {
          path:"", //kuch nhi de rhe h bcz yehi first page h
          element:<Home/>
        },
        {
          path:"about",//  "/about"
          element:<About/>
        },
        {
          path:"contact",   //  "/contact"
          element:<Contact/>
        }
      ]
  }
 ])  */

//2nd Way:
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}  />
        <Route path="about" element={<About/>}  />
        <Route path="contact" element={<Contact/>}  />

         {/* Capturing parameters */}
        <Route path="user/:id" element={<User/>}  />

           {/*For using API  */}
        <Route 
        // can write api call here loader(()=>{fetch........}  )
        loader={githubInfoLoader}
        path="github"
        element={<Github/>}  />

       
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 
    remove <App/>
    and give  <RouterProvider router={router}/>
    router is prop that takes value router
    */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)









