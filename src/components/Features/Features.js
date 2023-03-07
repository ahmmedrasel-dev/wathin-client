import React, { useEffect, useState } from 'react';
import Feature from './Feature';

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('features.json')
      .then(res => res.json())
      .then(data => setFeatures(data))
  }, [])

  return (
    <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto py-10 p-4'>
      <div className='text-center pb-12'>
        <p className='uppercase text-md'>WHAT WE DO</p>
        <h2 className='lg:text-4xl text-2xl font-medium'>We build strong brands and grow businesses through branded <br /> services, <span className='text-[#42afef]'>digital storytelling.</span></h2>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {
          features.map(feature => <Feature
            key={feature._id}
            feature={feature}
          ></Feature>)
        }
      </div>

      <div className='pt-12 flex space-x-4 justify-center'>
        <button className='btn bg-[#42afef] text-white hover:bg-[#42afef]'>All Services</button>
        <button className='btn btn-secondary text-white'>Contact Us</button>
      </div>
    </div>
  );
};

export default Features;