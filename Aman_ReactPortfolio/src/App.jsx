import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Project from './components/Project'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
