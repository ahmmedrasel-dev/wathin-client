import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import useAdmin from '../../hooks/useAdmin';

const Navlinks = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useContext(AuthContext);
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
        isLoggedIn ?
          <>
            <li>
              <div className="dropdown dropdown-end hover:bg-[transparent]">
                <button className='btn btn-outline rounded-lg ml-2 text-primary'>{user && user.name}</button>
                <ul tabIndex={0} className="dropdown-content p-2 shadow-md bg-white border-2 border-slate-100 rounded-box w-52 top-[70px]">
                  <li><NavLink to='/dashboard' className='rounded-lg w-full text-secondary mb-2'>Dashboard</NavLink></li>
                  <li><NavLink onClick={handleSignOut} className='rounded-lg text-white bg-error w-full text-center'>Log out</NavLink></li>
                </ul>
              </div>
            </li>
          </>
          :
          <li><button className='btn btn-warning rounded-lg text-white ml-2 border-0' onClick={() => navigate('/login')}>Login</button></li>
      }

    </>
  );
};

export default Navlinks;
