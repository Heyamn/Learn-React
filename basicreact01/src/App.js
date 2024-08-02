import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  // let counter =10;

  const addValue = () => {
      setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
}

  return (
    <>
      <h1>Learn React with aman:-{counter}</h1>
      <h2>Counter {counter}</h2>
      <button onClick={addValue} >Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer:- {counter}</p>
    {/* <Youtube/> */}
    </>
  );
}

export default App;
