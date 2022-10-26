import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Loading = () => <p>Loading…</p>
const Home = React.lazy( () => import( './pages/Home' ) )
const ProjectList = React.lazy( () => import( './pages/Project-list' ) )
const ProjectDetail = React.lazy( () => import( './pages/Project-detail' ) )
const Contact = React.lazy( () => import( './pages/contact' ) )

const AppRouter: React.FC<any> = () => {
  return (
    <React.Suspense fallback={ <Loading /> } >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<ProjectList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work/:title' element={<ProjectDetail />} />
      </Routes>
    </React.Suspense>
  )
}

export default AppRouter
