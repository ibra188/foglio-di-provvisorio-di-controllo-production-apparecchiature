import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css";
import styled, { css } from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
` 

function Home() {
 

  return (
    <div>
        <nav>
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="/about">About Us</Link>
          <Link className='nav-item' to="/contact">Contact</Link>
        </nav>
        <div>
          <Title>
             Provvisorio di controllo productione apparecchiature
          </Title>
        </div>
    </div>
  );
}

export default Home;
