import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar ">
            <div className="flex-1 px-2 mx-2 text-xl lg:text-4xl font-bold text-primary"><span className='text-error'>Abc</span> Constructor</div>

            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <ul className="menu menu-horizontal gap-x-2">
                  <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                  <li><NavLink to='/services' className='rounded-lg'>Services</NavLink></li>
                  <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
                  <li><NavLink to='/login' className='rounded-lg'>All Projects</NavLink></li>
                  <li><NavLink to='/news' className='rounded-lg'>News</NavLink></li>
                  <li><NavLink to='/contact' className='rounded-lg'>Contact Us</NavLink></li>
                </ul>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
            <li><NavLink to='/services' className='rounded-lg'>Services</NavLink></li>
            <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
            <li><NavLink to='/login' className='rounded-lg'>All Projects</NavLink></li>
            <li><NavLink to='/news' className='rounded-lg'>News</NavLink></li>
            <li><NavLink to='/contact' className='rounded-lg'>Contact Us</NavLink></li>

          </ul>

        </div>
      </div>

      {/* <header className="navbar bg-base-100 lg:px-20 px-4 fixed top-0 z-50">
        <div className="flex-1 px-2 mx-2 text-4xl font-bold text-primary"><span className='text-error'>Abc</span> Constructor</div>
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal gap-x-2">
            <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
            <li><NavLink to='/services' className='rounded-lg'>Services</NavLink></li>
            <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
            <li><NavLink to='/login' className='rounded-lg'>All Projects</NavLink></li>
            <li><NavLink to='/news' className='rounded-lg'>News</NavLink></li>
            <li><NavLink to='/contact' className='rounded-lg'>Contact Us</NavLink></li>
          </ul>
        </div>
      </header> */}
    </>
  );
};

export default Navbar;