import React, { useId } from 'react';

const InputBox = ({
    label,
    onAmountChange,
    amount,
    currencyOptions = [],
    selectedCurrency = "usd",
    onCurrencySelection,
    amountDisable = false,
}) => {
    const amountInputId = useId();

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
                    value={amount}
                    id={amountInputId}
                    type="number"
                    placeholder="Amount"
                    className="outline-none bg-gray-100 py-1.5 w-full px-2 rounded-md"
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value));
                    }}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-end flex-wrap  gap-1">
                <p className="text-gray-600 mb-2 w-full sm:w-auto">
                    Currency Type
                </p>
                <select
                    className="rounded-md px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full sm:w-auto"
                    value={selectedCurrency}
                    onChange={(e) => {
                        onCurrencySelection && onCurrencySelection(e.target.value);
                    }}
                    disabled={''}
                >
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default InputBox;
