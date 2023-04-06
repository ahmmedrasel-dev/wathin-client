import React from 'react';
import Service from './Service';
import data from '../../data/services';
import { SwiperSlide } from 'swiper/react';
import useTitle from '../../hooks/useTitle';

const Services = () => {
  useTitle('Services')
  return (
    <div className='bg-slate-300'>
      <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto py-10 p-4'>
        <div className='text-center pb-12'>
          <p className='uppercase text-2xl font-semibold title'>Our Services</p>

          <p className='text-md mt-10'>Skilled worker is a segment of the workforce that has specialized know-how, training, and experience to carry out more complex physical, or mental tasks than routine job functions. In today's industry, I believe it is crucial to have a skilled workforce in any industry. Because they are highly qualified and experienced, skilled individuals can help your business become more productive. Whereas more training for unskilled workers may be necessary, this somehow takes more time and money to up skill them. Discuss your company’s requirements with us, And we will provide you with advice you need to hear regarding the professional reinforcements to assist with the growth of your business..
          </p>
        </div>

        <h2 className='text-primary text-center text-xl mb-8'>AVAILABLE SKILLED WORKERS</h2>
        <div className='grid lg:grid-cols-7 grid-cols-1 gap-8'>
          {
            data.map(service => (
              <SwiperSlide><Service
                key={service._id}
                service={service}
              ></Service></SwiperSlide>
            ))
          }
        </div>
      </div>
    </div>

  );
};

export default Services;