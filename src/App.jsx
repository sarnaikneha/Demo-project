import { useState } from "react";
import "./App.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 130 },
    GBP: { USD: 1.34, EUR: 1.14, JPY: 147 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068 },
  };

  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency];
      const result = amount * rate;
      setConvertedAmount(result.toFixed(2));
    }
  };

  return (
    <div className=" w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-black bg-sky-400 text-m gap-x-2">
      <h1 className="text-md">Currency Converter</h1>
      <div className="px-3 py-5 flex  mg-l">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="py-1 px-1 bg-black">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <span> To </span>
        <div className="px-1 py-1 bg-black">
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <h2>Converted Amount: {convertedAmount}</h2>
    </div>
  );
};

export default CurrencyConverter;
