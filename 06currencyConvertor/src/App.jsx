import { useState } from 'react'
import { InputBox } from './components'  //index.js is bydefault called
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {

  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

//USING  OUR OWN HOOK
const currencyInfo=useCurrencyInfo(from)   //"from" --mai "usd" by default currency h
//ye from humari ${currency} hai in API
//this custom hook returns data........
//,and usd:{  key:value   }  "usd humara object h"
//To get all keys from objects

//"options" is our "currencyOptions" in InputBox.jsx line 15
const options= Object.keys(currencyInfo) //we will get all keys


//FOR SWAP FUNCTIONALITY
//swapping two varibles
const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

//This will display final result
// setConvertedAmount(amount * currencyInfo[to] )     
//amount * currencyInfo[to]
//1    *   82                        --usd[inr] is 82 is its value

const convert=()=>{
setConvertedAmount(amount * currencyInfo[to] ) 
}

return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, //from pixels website
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault(); //we dont want to send form anywhere we want to call this method convert()
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}  // giving property from state variable
                          currencyOptions={options}    //currency options is []  usmai jayega options vahi "object(usd) ke keys (all keys inr,algo,alex)"  
                          onCurrencyChange={(currency)=> setAmount(amount) }   //if currency is changed to "inr" now  then put that value into "amount"
                          selectCurrency={from}  
                          onAmountChange={ (amount) => setAmount(amount) }   //so that we can change value   
                                        />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick= {swap}           //swap button chalane ke liye use onclick and give referenec of swap
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                           label="To"
                           amount={convertedAmount}  // giving property from state varaible
                           currencyOptions={options}    //currency options is []  usmai jayega options vahi "object(usd) ke keys (all keys inr,algo,alex)"  
                           onCurrencyChange={(currency)=> setTo(currency) }   //"to" jo hai line number 40
                           selectCurrency={to} 
                           amountDisable  //means true user cant change when its 0 i.e lower  vo increase decrease option nhi ayega
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert  {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
 








