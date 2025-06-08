import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Project from './components/Project.jsx'
import { Contact } from './components/Contact.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
    <Route path='' element={<Home />} />
    <Route path='/projects' element={<Project />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About/>} />
    <Route path='/experience' element={<Experience/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
