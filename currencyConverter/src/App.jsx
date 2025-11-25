import { useState } from 'react'
import { InputBox } from './components'
import bgImage from './assets/17454.jpg'
import currencyImg from './assets/currency.png'
import heroImage from './assets/rupeeSymbol.jpg'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

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
        <div
            className="w-full h-screen flex justify-center items-center bg-repeat relative animated-bg"
            style={{
                backgroundImage: `url('${bgImage}')`,
            }}
        >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            
            <div className="relative z-10 flex w-full max-w-6xl items-center justify-between px-4 md:px-10">
                <div className="hidden md:flex w-1/2 justify-center items-center mr-10">
                    <img 
                        src={currencyImg} 
                        alt="Currency Converter Illustration" 
                        className="w-full max-w-lg object-contain hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                    />
                </div>

                <div className="w-full max-w-md border border-white/20 rounded-2xl p-6 backdrop-blur-md bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                    <h1 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-md">Currency Converter</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                                className="bg-white/20 text-white placeholder-white/70"
                            />
                        </div>
                        <div className="relative w-full h-0.5 my-2">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                amountDisable
                                selectCurrency={to}
                                className="bg-white/20 text-white"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg font-semibold text-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
