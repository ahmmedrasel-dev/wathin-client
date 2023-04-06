import React from 'react';
import './service.css';
const Service = ({ service }) => {
  const { title, icon } = service;
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-1/2' src={icon} alt="Shoes" />
        <h2 className="text-center text-lg font-semibold mt-4">
          {title}
        </h2>
      </div>

    </>
  );
};

export default Service;