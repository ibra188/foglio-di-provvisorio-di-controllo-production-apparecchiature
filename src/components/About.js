import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css";

export default function About() {
  return (
    <div>
       <nav>
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="/about">About Us</Link>
          <Link className='nav-item' to="/contact">Contact</Link>
        </nav>
        <div>
          <h1>About</h1>
        </div>
    </div>
  )
}