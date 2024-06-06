import React from "react"
import ReactDom from 'react-dom/client';
import { BrowserRouter,Routes, Route ,Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Vans from "./Vans"
import VanDetail from "./VanDetail"


import"./server"

function App() {

  return (
    <BrowserRouter>
    <hearder>
      <link classname="site-logo" to="/">#vanLife</link>
      <nav>
        <link to="/about">About</link>
        <Link to="/vans">Vans</Link>
        </nav>
    </hearder>
    <Routes>
      <Route path="/"elements={<Home/>} />
      <Route path="/"elements={<About/>} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>

      </BrowserRouter>
  )
}

ReactDom
.createRoot(document.getElementById('root'))
.render(<App/>);
