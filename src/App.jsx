import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import HomePage from './Pages/HomePage.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import DefaultLayout from './Layout/DefaultLayout.jsx'
import Show from './Pages/SecondPages/Show.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="/show" element={<Show />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
