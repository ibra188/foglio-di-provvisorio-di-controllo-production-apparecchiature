import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import SubmitValidation from './forms/SubmitValidation';
import SetFormValues from './forms/SetFormValues';
import "../index.css";
import FieldValidation from './forms/FieldValidation';



export default function Contact() {

  return (
  <>
    <nav>
       <Link className='nav-item' to="/">Home</Link>
       <Link className='nav-item' to="/about">About Us</Link>
       <Link className='nav-item' to="/contact">Contact</Link>
    </nav>
    <SubmitValidation />
    <SetFormValues />
    <FieldValidation />
  </>
  );
}

