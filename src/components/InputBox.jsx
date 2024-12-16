import React, { useId } from "react";
import "./InputBox.css";

const InputBox = ({
  // THESE ARE PROPS

  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,

  className = "",

  // THESE ARE PROPS
}) => {
  const uniqueInputId = useId();
  return (
    <>
      <div className={`form-control  ${className}`}>
        <div className="field-wrapper">
          <label htmlFor={uniqueInputId}>{label}</label>
          <input
            id={uniqueInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="field-wrapper">
          <label>Currency Type</label>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
          >

            
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
