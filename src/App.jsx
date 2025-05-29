import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Pages/Index'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About'
import Contact from './Pages/Contact'
import Work from './Pages/Work'
import BlogDetails from './Pages/BlogDetails'
import MachineDetails from './Pages/MachineDetails'
import Machines from './Pages/Machines'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog">
            <Route index element={<Work />} />
            <Route path=":link" element={<BlogDetails />} />
          </Route>
          <Route path="/machines">
            <Route index element={<Machines />} />
            <Route path=":link" element={<MachineDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
