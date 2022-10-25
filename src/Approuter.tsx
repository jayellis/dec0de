import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Loading = () => <p>Loading…</p>
const Home = React.lazy( () => import( './pages/Home' ) )

const AppRouter: React.FC = () => {
  return (
    <React.Suspense fallback={ <Loading /> } >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </React.Suspense>
  )
}

export default AppRouter
