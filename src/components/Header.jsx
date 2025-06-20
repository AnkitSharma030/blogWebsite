import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='title'>Blogify</div>
        <div className='element'>
            <input type="search" placeholder='What are you lookin for' name="" id="" />
            <button>Search</button>
        </div>
        <div className='signup'>
            <button className='sign'>Sign Up</button>
            <button className='login'>Login</button>
        </div>
    </div>
  )
}

export default Header