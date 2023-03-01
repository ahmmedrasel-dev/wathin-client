import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
  return (
    <>
      <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
      <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
      <li><NavLink to='/services' className='rounded-lg'>Services</NavLink></li>
      <li><NavLink to='/projects' className='rounded-lg'>All Projects</NavLink></li>
      <li><NavLink to='/news' className='rounded-lg'>News</NavLink></li>
      <li><NavLink to='/contact' className='rounded-lg'>Contact Us</NavLink></li>
      <li><button className='btn btn-warning rounded-lg text-white'>Login</button></li>
    </>
  );
};

export default Navlinks;