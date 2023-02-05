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
    <div className='p-8 lg:p-20'>
      <div className='text-center pb-12'>
        <p className='uppercase text-md'>WHAT WE DO</p>
        <h2 className='text-4xl font-medium'>We build strong brands and grow businesses through branded <br /> services, <span className='text-error'>digital storytelling.</span></h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
          features.map(feature => <Feature
            key={feature._id}
            feature={feature}
          ></Feature>)
        }
      </div>

      <div className='pt-12 flex space-x-4 justify-center'>
        <button className='btn btn-error'>All Services</button>
        <button className='btn btn-secondary'>Contact Us</button>
      </div>
    </div>
  );
};

export default Features;