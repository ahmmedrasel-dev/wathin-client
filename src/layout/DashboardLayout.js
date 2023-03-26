import React, { useState } from 'react';
import { useRef } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Navlinks from '../pages/Shared/Navlinks';

const DashboardLayout = () => {

  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;

    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div>
      <div className="drawer drawer-end bg-slate-300">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div ref={scrollRef} className="drawer-content" onScroll={handleScroll} >
          <Navbar isSticky={isSticky}></Navbar>
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4">
              {/* <!-- Page content here --> */}
              <Outlet></Outlet>

            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="dashboar p-2 bg-slate-200" style={{ width: '300px' }}>
                {/* <!-- Sidebar content here --> */}
                <li className="py-3 px-4 cursor-pointer hover:bg-slate-100 m-2 rounded-md "><NavLink to="/dashboard/add-news">Add News</NavLink></li>
                <li className="py-3 px-4 cursor-pointer hover:bg-slate-100 m-2 rounded-md "><NavLink to="/news">All News</NavLink></li>
                <li className="py-3 px-4 cursor-pointer hover:bg-slate-100 m-2 rounded-md "><NavLink to="/add-projects">Add Project</NavLink></li>
                <li className="py-3 px-4 cursor-pointer hover:bg-slate-100 m-2 rounded-md "><NavLink to="/projects">All Projects</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[80%] lg:w-[40%] bg-white dark:bg-gray-800 text-[#05264e]">
            <Navlinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;