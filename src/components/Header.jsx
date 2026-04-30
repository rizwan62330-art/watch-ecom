import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='main-header-container'>
      <div className="logo">
        <h1>Seiko</h1>
      </div>
      <div className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#orders">Orders</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className='buttons'>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Header
