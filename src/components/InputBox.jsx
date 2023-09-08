import React,{useId} from 'react'

const InputBox = ({
    amount,
    currencyOptions=[],
    selectedCurrency="usd",
    onCurrencySelection,
    amountDisable,

}) => {
    const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
        <div className='w-1/2'>
            <label 
            htmlFor={amountInputId}
            className='text-black/40 mb-2 inline-block'
            >Label</label>
            <input 
            value={amount}
            id={amountInputId}
            type="number"
            placeholder='Amount'
            className='outline-none bg-transparent py-1.5 w-full '
            onChange={(e)=>{ onAmountChange&&onAmountChange(Number(e.target.value))
            }} 
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>

            <select 
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e)=>{
                onCurrencySelection &&onCurrencySelection(e.target.value)
            }}
            disabled={''}>

                {currencyOptions.map((currency)=>{
                    <option 
                    key = {currency}
                    value={currency}>
                        {currency.toUpperCase()}
                    </option>
                })}

            </select>
        </div>
      
    </div>
  )
}

export default InputBox
