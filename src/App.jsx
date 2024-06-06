import React from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route ,Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"


import"./server"

export default function App() {

  return (
    <BrowserRouter>
    <header>
      <Link className="site-logo" to="/">#vanLife</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        </nav>
    </header>
    
    <Routes>
      <Route path="/"elements={<Home/>} />
      <Route path="/about"elements={<About/>} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>

      </BrowserRouter>
  )
}

