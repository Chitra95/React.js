//src -hooks folder create-useCurrencyInfo.js
// name this .js 

//custom hooks are easy
/*
function hello(){
    return []
} 
*/
//this is also custom hook
//custom hooks can use built-in hooks useEffect,useState

// ----------------Custom hook-------------------
import { useEffect,useState } from "react";
function useCurrencyInfo(currency){

    //using useState hook 
    const [data,setData]=useState({})

    //to call api-when this hook is loaded or called
    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json() )  //converting api from string to json
        .then( (res)=> setData(res[currency]) ) //holding res in varaiable using useState to update in many places in UI
                                   //whatever currency i pass in api ${currency} that is my "key" in api
                                   //res[currency]    res.usd       res.inr
        console.log(data);
    },[currency])   //whwenenev thr is change in currency call this appi therefore dependency
    console.log(data);

    return data
}

export default useCurrencyInfo;
