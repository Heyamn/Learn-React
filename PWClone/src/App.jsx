import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"
import Login from './components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
      {/* <Navbar /> */}
    </>
  )
}

export default App
