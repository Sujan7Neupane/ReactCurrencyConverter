import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyExchange from "./hooks/useCurrencyExchange";

function App() {
  const [amount, setAmount] = useState(0);
  const [labelFrom, setLabelFrom] = useState("usd");
  const [labelTo, setLabelTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState();

  // using custom hooks
  const currencyData = useCurrencyExchange(labelFrom);
  // inside from 'usd', 'npr' haru aauxa

  // Objects ko key matra lyako
  // Object.keys(currencyData); yesma keys aauxa
  const options = Object.keys(currencyData);

  // finalResult when clicking convert Button
  const finalConverted = () => {
    setConvertedAmount(amount * currencyData[labelTo]);
  };

  return (
    <>
      <div id="main-section">
        <div className="container">
          <div className="form-wrapper">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                finalConverted();
              }}
            >
              <h1 className="main-title">Currency Converter</h1>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setLabelFrom(currency)}
                selectCurrency={labelFrom}
                onAmountChange={(amount) => setAmount(amount)}
              />
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setLabelTo(currency)}
                selectCurrency={labelTo}
                amountDisable
              />
              <button className="convertBtn" onClick={finalConverted}>
                Convert {labelFrom.toUpperCase()} to {labelTo.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
