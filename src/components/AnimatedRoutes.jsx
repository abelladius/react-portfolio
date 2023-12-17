import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../routes/home/home.page';
import About from '../routes/about/about.page';
import Portfolio from '../routes/portfolio/portfolio.page';
import Contact from '../routes/contact/contact.page';


import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes className='content-container' location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes