import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MYApp() {
  return (
    <div>
    <h1>HEY</h1>
    </div>
  )
}



const reactElement={
  type:"a",
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:"Click me to visit google"
}


const anotherElement=(
  <a href="https://google.com" target='_blank' >Click me </a>
)

const reactElement1=React.createElement(
  'a',
  {
    href:"https://google.com"
  },
  "click me to visit google"

)


//Adding variables
const anotherUser="CHAI AUR REACT"
const reactElement2=React.createElement(
  'a',
  {
    href:"https://google.com"
  },
  "click me to visit google",
  anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MYApp/>
  // MYApp()
//  reactElement
  //  anotherElement
  // reactElement1
  // reactElement2
  <App/>
    
  
)
