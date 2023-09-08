import React, { useId } from 'react';

const InputBox = ({
    label, // Label for the input field
    onAmountChange, // Function to handle amount change
    amount, // Amount input value
    currencyOptions = [], // Available currency options
    selectedCurrency = "usd", // Selected currency
    onCurrencySelection, // Function to handle currency selection
    amountDisable = false, // Whether the input should be disabled
}) => {
    const amountInputId = useId(); // Generate a unique ID for the input field

    return (
        <div className="bg-white p-3 rounded-lg text-sm flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label
                    htmlFor={amountInputId}
                    className="text-gray-600 mb-2"
                >
                    {label}
                </label>
                <input
                    value={amount} // The value displayed in the input (controlled by the 'amount' prop)
                    id={amountInputId} // An ID for the input element, often used for labeling and accessibility
                    type="number" // Specifies the input type as 'number'
                    placeholder="Amount" // Placeholder text displayed in the input when it's empty
                    className="outline-none bg-gray-100 py-1.5 w-full px-2 rounded-md" // CSS classes defining the input's styling
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value)); // Function to handle changes in the input value and update 'amount' when the user types a new amount
                    }}
                    disabled={amountDisable} // A boolean prop that indicates whether the input should be disabled (controlled by the 'amountDisable' prop)
                />

            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-end flex-wrap gap-1">
                <p className="text-gray-600 mb-2 w-full sm:w-auto">
                    Currency Type
                </p>
                <select
                    className="rounded-md px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full sm:w-auto"
                    value={selectedCurrency} // The currently selected currency (controlled by the 'selectedCurrency' prop)
                    onChange={(e) => {
                        onCurrencySelection && onCurrencySelection(e.target.value); // Function to handle currency selection and update 'selectedCurrency' when the user changes the option
                    }}
                    disabled={''} // A boolean prop (often used for disabling the select element, but currently an empty string is provided)
                >
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency.toUpperCase()} {/* Display the available currency options in uppercase */}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    );
}

export default InputBox;
