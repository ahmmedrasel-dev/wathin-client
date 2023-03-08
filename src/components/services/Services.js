import React from 'react';
import Service from './Service';
import data from '../../data/services';
import { SwiperSlide } from 'swiper/react';

const Services = () => {

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-20 lg:py-20 p-4 bg-slate-300'>
      {
        data.map(service => (
          <SwiperSlide><Service
            key={service._id}
            service={service}
          ></Service></SwiperSlide>
        ))
      }
    </div>
  );
};

export default Services;