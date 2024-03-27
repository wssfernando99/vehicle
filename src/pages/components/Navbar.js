import React from 'react'
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-topic'>
            <div className='nav-logo'>
            </div>
            <div className='nav-header'><h2>Autocare Center</h2></div>
        </div>
        <div className='nav-list'>
          <ul className='nav-ul'>
            <div className='item'><li >Home</li></div>
            <div className='item'><li>About</li></div>
            <div className='item'><li>Help</li></div>
            <Link to ='/Login' className='nav-link'><div className='item'><li className='li-item'><a>Login</a></li></div></Link>
            <Link to ='/Register' className='nav-link'><div className='item'><li className='li-item'>Register</li></div></Link>
          </ul>
        </div>
   
    </nav>
  )
}
