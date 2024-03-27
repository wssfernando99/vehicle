import React from 'react'
import './welcome.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Welcome = () => {
  useEffect(()=> {
    AOS.init({duration: 3000});
},[]);

  return (
    <div className='main-wrapper'>
    <div className='main-container-welcome'>
      <div className='navbar-space'><Navbar /></div>
      <div className='first-container' >
          <h1 data-aos='fade-left'>Hello ,Welcome to AutoCare center</h1>
          <p data-aos='fade-right'>join with us for make your choice more Better.... </p>
      </div>
      <div className='second-container' data-aos="fade-up">
        <div className='second-container-item' >
          <div className='second-container-item1'><h2>How Better your car</h2></div>
          <div className='second-container-line'></div>
        </div>
        <div className='second-container-item' >
        <div className='second-container-item1'><h2>Need to know about your car</h2></div>
        <div className='second-container-line'></div>
        </div>
        <div className='second-container-item' >
        <div className='second-container-item1'><h2>Faults and Solutions</h2></div>
        <div className='second-container-line'></div>
        </div>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  </div>
  )
}
