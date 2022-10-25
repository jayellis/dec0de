import React from 'react'
import './styles/App.scss'
import AppRouter from './Approuter'
import Header from './components/Header.component'

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
