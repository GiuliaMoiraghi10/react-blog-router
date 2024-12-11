import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from './Pages/HomePage.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import DefaultLayout from './Layout/DefaultLayout.jsx'
import NotFound from './Pages/NotFound.jsx'
import BlankLayout from './Layout/BlankLayout.jsx'
import Index from './Pages/SecondPages/Index.jsx'
import Show from './Pages/SecondPages/Show.jsx'

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/characters">
            <Route path='' element={<Index />}></Route>
            <Route path=':id' element={<Show />}></Route>
          </Route>
        </Route>
        <Route element={<BlankLayout />}>
          <Route path='*' Component={NotFound}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
