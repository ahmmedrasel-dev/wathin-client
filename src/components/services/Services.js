import React from 'react';
import Service from './Service';
import data from '../../data/services';

const Services = () => {

  return (
    <div className='grid grid-cols-3 gap-4 px-20 py-20 bg-neutral'>
      {
        data.map(service => <Service
          key={service._id}
          service={service}
        ></Service>)
      }
    </div>
  );
};

export default Services;