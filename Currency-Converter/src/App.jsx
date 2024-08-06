import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  // console.log(options);
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <>
      <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('../src/assets/curr_conv.jpg')"
      }}>
      <div className="w-full">
        <div className="w-full mx-auto max-w-xl h-20 border border-gray-60 rounded-lg p-5 backdrop-blur-sm relative bottom-28 text-center font-bold text-3xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200" style={{color:"#1b263b"
        }}> Currency Converter
        </div>
        <div className="w-full max-w-md mx-auto     border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions ={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
              onClick={swap}>Swap</button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable/>
            </div>
            <button type="submit" className="w-full flex flex-wrap justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-base rounded-lg text-sm px-4 py-3 text-center me-2 mb-2 ">
              <img src="../src/assets/exchange_1890261.png" alt="currenccy_exchange" className='w-10 h-10 mr-4' />Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )

}

export default App;
