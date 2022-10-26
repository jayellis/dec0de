import React from 'react'
import { Link } from 'react-router-dom'


const Home: React.FC = () => {
  return (
    <>
      <p>Hello</p>
      <Link to='/work/my_second_project'>
        <p>World</p>
      </Link>
    </>
  )
}

export default Home
