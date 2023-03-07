import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
  return (
    <>
      <li><NavLink to='/' className='rounded-lg text-[#fff] mr-2'>Home</NavLink></li>
      <li><NavLink to='/about' className='rounded-lg text-[#11374d]'>About</NavLink></li>
      <li><NavLink to='/services' className='rounded-lg text-[#11374d]'>Services</NavLink></li>
      <li><NavLink to='/projects' className='rounded-lg text-[#11374d]'>All Projects</NavLink></li>
      <li><NavLink to='/news' className='rounded-lg text-[#11374d]'>News</NavLink></li>
      <li><NavLink to='/contact' className='rounded-lg text-[#11374d]'>Contact Us</NavLink></li>
      <li><button className='btn btn-warning rounded-lg text-white ml-2'>Login</button></li>
    </>
  );
};

export default Navlinks;