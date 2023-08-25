import React from 'react'
import Header from './Header/Header'
import './Navbar.css'
import Burger from '../Hambergur/Burger'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Header/>
        <Burger/>
    </div>
  )
}

export default Navbar