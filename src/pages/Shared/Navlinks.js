import React, { useState, useRef, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FaCaretDown } from 'react-icons/fa';

const Navlinks = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleSignOut = () => {
    logout()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <li><NavLink to='/' className='rounded-lg text-secondary mr-2'>Home</NavLink></li>
      <li><NavLink to='/about' className='rounded-lg text-[#11374d]'>About</NavLink></li>
      <li><NavLink to='/services' className='rounded-lg text-[#11374d] mx-2'>Services</NavLink></li>
      <li><NavLink to='/projects' className='rounded-lg text-[#11374d]'>All Projects</NavLink></li>
      <li><NavLink to='/contact' className='rounded-lg text-secondary'>Contact Us</NavLink></li>
      {
        isLoggedIn &&
        <>
          <li className="relative" ref={dropdownRef}>
            <button className="text-black" onClick={toggleDropdown}>
              {user?.name} <FaCaretDown />
            </button>
            <ul className={`absolute z-50 bg-white rounded-md shadow-md p-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <li><NavLink to="/dashboard" className='rounded-lg text-secondary'>Dashboard</NavLink></li>
              <li><button className='rounded-lg text-secondary' onClick={handleSignOut}>Logout</button></li>
            </ul>
          </li>
        </>
      }

    </>
  );
};

export default Navlinks;
