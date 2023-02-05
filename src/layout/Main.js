import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default Main;