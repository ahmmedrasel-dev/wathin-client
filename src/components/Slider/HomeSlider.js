import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider2 from '../../assets/images/slider2.jpeg'
import slider3 from '../../assets/images/slider3.jpeg'

const HomeSlider = () => {

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div className='w-full relative h-[540px]'>
          <div className='absolute z-50 inset-y-1/3 left-20 w-2/4'>
            <p className='text-lg uppercase'>lorem impsum dol amet</p>
            <h1 className='text-7xl text-base-100'>Hell this is first Slide.</h1>
            <p className='py-4 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
            <button className='btn btn-primary'> Explore More</button>
          </div>

          <img className='w-full' src={slider2} alt="" />
        </div>
        <div className='w-full relative h-[540px]'>
          <div className='absolute z-50 inset-y-1/3 left-20 w-2/4'>
            <p className='text-lg'>lorem impsum dol amet</p>
            <h1 className='text-7xl text-base-100'>Hell this is first Slide.</h1>
            <p className='py-4 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
            <button className='btn btn-primary'> Explore More</button>
          </div>
          <img className='w-full' src={slider3} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default HomeSlider;