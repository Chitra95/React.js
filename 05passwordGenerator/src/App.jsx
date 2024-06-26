 import { useState,useCallback,useEffect,useRef} from 'react'


 
function App() {
  //Collecting variables
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //making variable for useRef Hook
  const passwordRef=useRef(null)  //abi no reference given
  //useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  //const ref = useRef(initialValue)

  //Generating password function
  // const passwordGenerator=()=>{

  // } bt it keeps running when something changes[dependencies-length,number,character,setPassword] therefore usecallback hook
  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  const passwordGenerator=useCallback( ()=>{

  //for generating password this is javascript
      let pass="" //generated password ismai hoga then setPassword se password mai dalenge
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  //data from which password is generated

      //condition
      if(numberAllowed) str+= "0123456789"
      if(charAllowed) str+="!@#$%^&*()_-{}[]~`"

      //password to pick random character from string using loop and kitne baar loop chalega depends upon "length"
      for (let i = 1; i < length; i++) {
       let char=Math.floor(Math.random()*str.length +1)  //+1 so that 0 na aaye   //we got index value
        pass += str.charAt(char)  // charAt() give character at tht index       += for concatenation each value we got
        
      }
      setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])

    // passwordGenerator() //cant call like this bcz useCallback is used
    //and wht renders,when it renders is controlled by REACT and not by us!!

    //best way to call this passwordGenerator fn
    //   "useEffect" is a React Hook that lets you synchronize a component with an external system.
    //useEffect(setup, dependencies?)


    //useCallback [dependencies]-we see kis pe dependency hai and possible run hoga and "how to optimize that method"
    //useCallback is fun definition that  goes into memory
    //useEffect     any change in dependency "run" again
    //when page loads at first run hoga and jab dependencies change hogi tho run hoga
    useEffect( ()=> {
      passwordGenerator()
    },[length,numberAllowed.charAllowed,passwordGenerator])  //dependencies mai "passwordGenerator" is for optimization nhi likenge tho bhi chalega
           
    //for onClick on COPY BUTTON
    //core react -window object is +nt,
    //in next.js   server side rendering,  window object is -nt
    const copyPasswordToClipboard=useCallback( ()=>{
         // passwordRef ka use kya tha??
         passwordRef.current?.select()  //current?  optionally select maybe value is null    //select() --Makes the selection equal to the current object.

         //for Range
        //  passwordRef.current?.setSelectionRange(0,6)

      window.navigator.clipboard.writeText(password)
    },[password]) //ye tho password se hogaya

   

    
    return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8   text-orange-500 bg-gray-700
       '> 
       <h1 className='text-2xl text-center my-3 text-white'>Password Generator</h1>
        
        <div className='flex shadow-lg rounded-lg overflow-hidden  mb-4 bg-blue-700' >
           <input 
           type="text" 
           value={password} //password is shown here
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly

           //for reference
           ref={passwordRef}
           />
            <button onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className="flex text-sm gap-x-2 "> 
          <div className='flex items-center gap-x-1 bg-white-500'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={ (e)=> {setLength(e.target.value)}}
            />
            <label  >Length:{length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox" 
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>



        </div>

       </div>
    </>
  )
}

export default App
