import React from "react"
import ReactDom from 'react-dom/client';
import { BrowserRouter,Routes, Route ,Link } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"


Import"./server"

function App() {

  return (
    <BrowserRouter>
    <hearder>
      <link classname="site-logo" to="/">#vanLife</link>
      <nav>
        <link to="/about">About</link>
        </nav>
    </hearder>
    <Routes>
      <Route path="/"elements={<Home/>} />
      <Route path="/"elements={<About/>} />
      </Routes>
      </BrowserRouter>
  )
}

ReactDom
.createRoot(document.getElementById('root'))
.render(<App/>)
