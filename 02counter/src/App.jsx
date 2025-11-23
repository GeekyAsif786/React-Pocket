import './App.css'
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(0)
  const addValue = () => {
    counter=counter+1;
    setCounter(counter)
    console.log("Counter:",counter);
  }
  const removeValue = () => {
    counter = counter-1;
    setCounter(counter)
    console.log("Counter:",counter);
  }
  const resetValue = () => {
    counter = 0;
    setCounter(counter)
    console.log("Counter:",counter);
  }
  return (
    <>
      <h1>React test text</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addValue}>+1</button>
      <br/>
      <br/>
      <button onClick={removeValue}>-1</button>
      <br/>
      <br/>
      <button onClick={resetValue}>RESET</button>
    </>
  )
}

export default App
