import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Details from '../components/details/Details'
import NotFound from '../components/not-found/NotFound'
import Nav from '../components/nav/Nav'

function SwitchPage() {
  return (
    <Routes>
      <Route path="/" element={((<Nav />), (<Home />))} />
      <Route path="/details/:id" element={<Details />} />
      <Route element={<NotFound />} />
    </Routes>
  )
}

export default SwitchPage
