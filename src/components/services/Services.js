import React from 'react';
import Service from './Service';
import data from '../../data/services';
import { SwiperSlide } from 'swiper/react';

const Services = () => {

  return (
    <div className='grid grid-cols-3 gap-4 px-20 py-20 bg-base-300'>
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