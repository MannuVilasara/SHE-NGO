import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from "../src/pages/LandingPage"
import Contact from "../src/pages/Contact"
import Discover from "../src/pages/Discover"
import Home from "../src/pages/Home"
import Projects from "../src/pages/Projects"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/discover" element={<Discover/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
