import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SwitchPage from './Route/SwitchPage'

import './styles/bulma.scss'
import './styles/global.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <SwitchPage />
      </BrowserRouter>
    </div>
  )
}

export default App
