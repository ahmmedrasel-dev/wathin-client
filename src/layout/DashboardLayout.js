import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaNewspaper, FaUsers } from 'react-icons/fa';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../pages/Shared/Navbar';
import Navlinks from '../pages/Shared/Navlinks';

const DashboardLayout = () => {

  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef(null);
  const { user } = useContext(AuthContext)

  const [isAdmin] = useAdmin(user?.email)

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

                {
                  isAdmin && <li className="py-3 px-2 cursor-pointer hover:bg-slate-100 m-2 rounded-md ">
                    <div className='flex justify-start items-center gap-4 btn'>
                      <FaUsers className='text-2xl' />
                      <span>Users</span>
                    </div>
                    <div className='flex flex-col pl-10 gap-2 mt-4'>
                      <NavLink className="flex items-center gap-2" to="/dashboard/users"><span><BsArrowRight /></span><span>Users</span></NavLink>
                    </div>
                  </li>
                }


                <li className="py-3 px-2 cursor-pointer hover:bg-slate-100 m-2 rounded-md ">
                  <div className='flex justify-start items-center gap-4 btn'>
                    <FaNewspaper className='text-2xl' />
                    <span>News</span>
                  </div>
                  <div className='flex flex-col pl-10 gap-2 mt-4'>
                    <NavLink className="flex items-center gap-2" to="/dashboard/add-news"><span><BsArrowRight /></span><span>Add News</span></NavLink>
                    <NavLink className="flex items-center gap-2" to="/dashboard/news"><span><BsArrowRight /></span><span>News</span></NavLink>
                  </div>
                </li>

                <li className="py-3 px-2 cursor-pointer hover:bg-slate-100 m-2 rounded-md ">
                  <div className='flex justify-start items-center gap-4 btn'>
                    <FaNewspaper className='text-2xl' />
                    <span>Projects</span>
                  </div>
                  <div className='flex flex-col pl-10 gap-2 mt-4'>
                    <NavLink className="flex items-center gap-2" to="/dashboard/add-project"><span><BsArrowRight /></span><span>Add Project</span></NavLink>
                    <NavLink className="flex items-center gap-2" to="/dashboard/projects"><span><BsArrowRight /></span><span>Projects</span></NavLink>
                  </div>
                </li>

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