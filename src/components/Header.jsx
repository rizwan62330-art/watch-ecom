import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='main-header-container'>
      <div className="logo">
        <h1>Seiko</h1>
      </div>
      <div className="nav">
        <ol>
           <ul><a href="#home">Home</a></ul>
           <ul><a href="#">About</a></ul>
           <ul><a href="#">Orders</a></ul>
           <ul><a href="#">Contact</a></ul>
        </ol>
      </div>
      <div className='buttons'>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Header
