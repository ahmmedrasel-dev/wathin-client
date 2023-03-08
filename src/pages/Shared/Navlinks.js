import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Navlinks = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <li><NavLink to='/' className='rounded-lg text-secondary mr-2'>Home</NavLink></li>
      <li><NavLink to='/about' className='rounded-lg text-[#11374d]'>About</NavLink></li>
      <li><NavLink to='/services' className='rounded-lg text-[#11374d] mx-2'>Services</NavLink></li>
      <li><NavLink to='/projects' className='rounded-lg text-[#11374d]'>All Projects</NavLink></li>
      <li><NavLink to='/news' className='rounded-lg text-[#11374d] mx-2'>News</NavLink></li>
      <li><NavLink to='/contact' className='rounded-lg text-secondary'>Contact Us</NavLink></li>
      {
        user?.email && <li><span className='text-secondary'>{user.email}</span></li>
      }
      {
        user?.email ?
          <>
            <li><button className='btn btn-error rounded-lg text-white ml-2 border-0' onClick={handleSignOut}>Sign Out</button></li>
          </>
          :
          <li><button className='btn btn-warning rounded-lg text-white ml-2 border-0' onClick={() => navigate('/login')}>Login</button></li>
      }

    </>
  );
};

export default Navlinks;