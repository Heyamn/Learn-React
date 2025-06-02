import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addValue = () => {
    if(count<10){
    setCount(count+1);
    }else {
      setCount(10);
      alert("Opps!!!!!!");
    }
  }
  const removeValue = () => {
    if(count>0){
    setCount(count-1);
    }else {
      setCount(0);
      alert("Opps!!!!!!");
    }
  }

  return (
    <>
    <h1>{count}</h1>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
