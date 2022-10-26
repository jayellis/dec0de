import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='logo' />
      </Link>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/work'>
            Work
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
