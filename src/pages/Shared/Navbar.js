import React from 'react';
import Navlinks from './Navlinks'
import './navbar.css'

const Navbar = ({ isSticky }) => {
  return (
    <>
      <header className={`flex items-center justify-between ${isSticky ? 'sticky' : ''}`}>
        <div className="navbar bg-[#2e3f6e] text-white w-full justify-between lg:px-8">
          <a href='/' className="btn btn-ghost normal-case text-xl text-white">Wathin</a>

          <div className='flex:none'>
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button xl:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          <div className="hidden xl:flex">
            <div className='menu menu-horizontal px-1'>

              <Navlinks />
            </div>
          </div>

        </div>

      </header>
    </>
  );
};

export default Navbar;