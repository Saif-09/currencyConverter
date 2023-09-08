import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hooks/useCurrency";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const currencyData = useCurrencyConverter(from);
  const currencyOptions = Object.keys(currencyData);

  const convertCurrency = () => {
    setConvertedAmount((amount * currencyData[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-semibold mb-4">Currency Converter</h1>
        <div className="mb-6">
          <InputBox
            label="From"
            onCurrencySelection={(currency) => setFrom(currency)}
            selectedCurrency={from}
            currencyOptions={currencyOptions}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mb-8"
          onClick={swap}
        >
          Swap
        </button>
        <div className="mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            selectedCurrency={to}
            onCurrencySelection={(currency) => setTo(currency)}
            amountDisable
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={convertCurrency}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
