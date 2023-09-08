import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hooks/useCurrency";


function App() {

  const [from, setFrom] = useState("usd");
  const [to, SetTo] = useState("inr")
  const [amount, SetAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyData = useCurrencyConverter(from);
  const currencyOptions = Object.keys(currencyData);

  const convertCurrency =()=>{
    setConvertedAmount(amount*currencyData[to]);
  }


  return (
    <>
      <div className="wrapper flex justify-center  bg-slate-400 w-100 h-screen items-center ">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault();
            convertCurrency()
          }}>
            <div className="w-full mb-1">
              <InputBox
              onCurrencySelection = {(currency)=>setFrom(currency)}
              selectedCurrency = {from}
              currencyOptions = {currencyOptions}
              amount={amount}
              onAmountChange = {(amount)=>SetAmount(amount)}
              label = "From"
              />
            </div>
            <div className="relative w-full h-0.5">
              <button  type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={()=>{}} >swap</button>
            </div>
            <div className="w-full mt-1 mb-4">
            <InputBox
            label = "To"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            selectedCurrency = {to}
            onCurrencySelection = {(currency)=>setTo(currency)}
            amountDisable
            />
            </div>
            <button 
            type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert USD To INR</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
