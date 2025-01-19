import { useState } from 'react';
import { InputBox } from './components';
import useCurrinfo from './hooks/usecurrinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { currencyInfo, currencyRates } = useCurrinfo(from); // Fetch rates based on 'from' currency
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    console.log("Rates object:", currencyRates); // Log to check the rates object

    const rate = currencyRates ? currencyRates[to] : null; // Safely access the rate for 'to' currency
    if (rate) {
      console.log(`Converting ${amount} ${from} to ${to} at rate ${rate}`);
      setConvertedAmount(amount * rate);
    } else {
      alert('Conversion rate not available!');
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                oncurrencychng={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) =>
                  setAmount(amount)
                }
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                oncurrencychng={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDis
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
