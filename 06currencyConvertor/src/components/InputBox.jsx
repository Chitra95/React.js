//rfce   react snippit extension

import React,{useId} from 'react'
//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
//const id = useId()
//remember:Do not call useId to generate keys in a list. Keys should be generated from your data.



function InputBox({
  label,   //from or to
  amount,
  onAmountChange,   //in useState
  onCurrencyChange,
  currencyOptions=[],//pass this to me in an array,if not passed i will take empty array
  selectCurrency="usd",   //bydefault usd de rhe h

  //for production grade app
  amountDisable=false,
  currencyDisable=false,



  className = "",   
  // takin user css
}) {
 

  const amountInputid=useId()  //will get unique id
  //see in label line 36 and line 41

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>            
            {/* css - js mai css     to take any classname given by user     */}
          <div className="w-1/2">
              <label htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">
                  {label}  
                  {/* data will come from variable */}
              </label>
              <input
                  id={amountInputid}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}  //bydefault ye false h
                  value={amount} //input field h value rahega hi
                  onChange={(e)=>onAmountChange && onAmountChange( Number(e.target.value))}   //if amount is change tho kya krna h  //bcz input value change hua tho
                  //converting itno number bcz input number h and we get string
                  //pehele check karo onAmountChange value aayi h ya nhi agr aayi h && thn  onAmountChange( Number(e.target.value))
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency} //bydefault="usd"
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}  //no need to change to number bcz string hi chahiye
                  disabled={currencyDisable}  //asking if this field is enabled or disabled
              >
                  {/* {//for looping} */}
                      {currencyOptions.map( (currency)=> (
                        <option key={currency} value={currency}>     

                        {/* when looping in jsx(makes dom element) give key --pass key to make performace in react for loop*/} 
                           {/* remember key in loops in react */}
                           {/* prefer taking id for index */}


                       {currency}  
                       {/* //ye display hoga */}
                        </option>
                      ) )

                      }
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
