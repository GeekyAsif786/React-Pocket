import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style = {{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center
        bottom-0 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 rounded-full text-white shadow-lg '
              style={{backgroundColor: "red"}}  
            >Red</button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 rounded-full text-white shadow-lg '
              style={{backgroundColor: "green"}}  
            >Green</button>
            <button
               onClick={() => setColor("blue")}
              className='outline-none px-4 rounded-full text-white shadow-lg '
              style={{backgroundColor: "blue"}}  
            >Blue</button>
            <button
              onClick={() => setColor("lavender")}
              className='outline-none px-4 rounded-full text-black shadow-lg '
              style={{backgroundColor: "lavender"}}  
            >lavender</button>
            <button
              onClick={() => setColor("coral")}
              className='outline-none px-4 rounded-full text-white shadow-lg '
              style={{backgroundColor: "coral"}}  
            >Coral</button>
            <button
              onClick={() => setColor("azure")}
              className='outline-none px-4 rounded-full text-black shadow-lg '
              style={{backgroundColor: "azure"}}  
            >Azure</button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 rounded-full text-white shadow-lg '
              style={{backgroundColor: "black"}}  
            >Black</button>
        </div>
        </div>
      </div>
  )
}

export default App
