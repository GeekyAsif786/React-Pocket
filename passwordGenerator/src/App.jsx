import { useState } from 'react'
import './App.css'
import { useCallback, useEffect, useRef } from 'react';

import passwordBg from './assets/password_bg.png'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const [showToast, setShowToast] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },
    [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  },
    [password])

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${passwordBg})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl px-8 py-8 text-orange-500 bg-gray-800/80 border border-gray-700 relative z-10 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Password Generator</h1>

        <div className="flex shadow-lg rounded-xl overflow-hidden mb-6 border border-gray-600">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-gray-700 text-white text-lg placeholder-gray-400 font-mono"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold transition-colors duration-200 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-y-6 text-sm text-gray-200">
          <div className="flex items-center gap-x-4">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer w-full h-2 bg-gray-600 rounded-lg appearance-none accent-blue-500"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className="text-base font-medium whitespace-nowrap w-20 text-right text-orange-400">Length: {length}</label>
          </div>

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-x-3 group">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-base cursor-pointer select-none group-hover:text-white transition-colors">Numbers</label>
            </div>

            <div className="flex items-center gap-x-3 group">
              <input
                type="checkbox"
                id="charInput"
                defaultChecked={charAllowed}
                className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput" className="text-base cursor-pointer select-none group-hover:text-white transition-colors">Characters</label>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl animate-bounce transition-all duration-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Password Copied!</span>
        </div>
      )}
    </div>
  )
}

export default App
