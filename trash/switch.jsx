import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Details from '../src/pages/details'
import NotFound from '../src/pages/not-found'

function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route element={<NotFound />} />
    </Routes>
  )
}

export default Switch
