import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.png'
import { BsFillEnvelopeFill, BsInstagram, BsTelephoneFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <>
      <footer className="footer lg:px-20 px-4 py-8 bg-white">
        <div className="">
          <p className='text-md'><img src={logo} alt="" /></p>

          <p className='font-sami-bold text-2xl mt-6'>Socail Media</p>
          <ul className='flex gap-4'>
            <li><a href="facebook"><FaFacebook className='text-3xl' /></a></li>
            <li><a href="facebook"><BsInstagram className='text-3xl' /></a></li>
            <li><a href="facebook"><IoLogoWhatsapp className='text-3xl text-[#7dc902]' /></a></li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-bold text-secondary">Site Navigation</span>
          <NavLink to='/' className='rounded-lg'>Home</NavLink>
          <NavLink to='/about' className='rounded-lg'>About us</NavLink>
          <NavLink to='/service' className='rounded-lg'>Services</NavLink>
          <NavLink to='/projects' className='rounded-lg'>All Projects</NavLink>
          <NavLink to='/contact' className='rounded-lg'>Contact Us</NavLink>
        </div>
        <div>
          <span className="text-lg font-bold text-secondary">Help</span>
          <NavLink to='/' className='rounded-lg'>FAQ’s</NavLink>
          <NavLink to='/' className='rounded-lg'>Privacy Policy</NavLink>
        </div>
        <div>
          <span className="text-lg font-bold text-secondary">Contact Us</span>
          <a href="phoneto:+966 053 908 3537" className='flex items-center gap-2'><BsTelephoneFill /> +966 053 908 3537</a>
          <a href="mailto:wathin.mehedihasan@gmail.com" className='flex items-center gap-2'><BsFillEnvelopeFill />wathin.mehedihasan@gmail.com</a>
          <p>Al-Malaz Dist, King Abdul Aziz <br />
            Road, Riyadh. KSA</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;