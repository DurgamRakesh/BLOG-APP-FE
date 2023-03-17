import React from 'react'
import {NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  
  return (
    <div>
        <div className='navbar' >
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/bollywood'>Bollywood</NavLink></li>
                <li><NavLink to='/technology'>Technology</NavLink></li>
                <li><NavLink to='/hollywood'>Hollywood</NavLink></li>
                <li><NavLink to='/fitness'>Fitness</NavLink></li>
                <li><NavLink to='/food'>Food</NavLink></li>
            </ul>
            
        </div>
        
    </div>
  )
}

export default Nav