import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hooks/useCurrency";

function App() {
  // Define states to manage input and conversion data
  const [from, setFrom] = useState("usd"); // Selected "From" currency
  const [to, setTo] = useState("inr"); // Selected "To" currency
  const [amount, setAmount] = useState(""); // Amount to be converted
  const [convertedAmount, setConvertedAmount] = useState(""); // Converted amount
  const currencyData = useCurrencyConverter(from); // Fetch currency data
  const currencyOptions = Object.keys(currencyData); // Extract currency options

  // Function to convert the selected currency
  const convertCurrency = () => {
    // Calculate and set the converted amount with 2 decimal places
    setConvertedAmount((amount * currencyData[to]).toFixed(2));
  };

  // Function to swap "From" and "To" currencies
  const swap = () => {
    // Swap the selected currencies
    setFrom(to);
    setTo(from);

    // Swap the converted and input amounts (Note: This logic may need adjustments)
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-semibold mb-4">Currency Converter</h1>
        <div className="mb-6">
          {/* InputBox for "From" currency */}
          <InputBox
            label="From" // Label for the input box (indicating "From" currency)
            onCurrencySelection={(currency) => setFrom(currency)} // Function to update the "From" currency when the user selects a different currency
            selectedCurrency={from} // Currently selected currency for the "From" input box (controlled by the 'from' state)
            currencyOptions={currencyOptions} // Available currency options for the user to choose from
            amount={amount} // Value of the input box, representing the amount to convert
            onAmountChange={(amount) => setAmount(amount)} // Function to update the 'amount' state when the user changes the input value
          />

        </div>
        {/* Swap button */}
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 mb-8"
          onClick={swap}
        >
          Swap
        </button>
        <div className="mb-4">
          {/* InputBox for "To" currency */}
          <InputBox
            label="To" // Label for the input box (indicating "To" currency)
            amount={convertedAmount} // Value of the input box, representing the converted amount
            currencyOptions={currencyOptions} // Available currency options for the user to choose from
            selectedCurrency={to} // Currently selected currency for the "To" input box (controlled by the 'to' state)
            onCurrencySelection={(currency) => setTo(currency)} // Function to update the "To" currency when the user selects a different currency
            amountDisable // A boolean prop that indicates the input should be disabled (amount input in "To" box is disabled)
          />

        </div>
        {/* Convert button */}
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
