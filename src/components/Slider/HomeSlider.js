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
        <div className='lg:relative lg:h-[520px] h-auto'>
          <div className='absolute z-50 lg:inset-y-1/3 lg:left-20 lg:w-2/4 w-full left-[20px] top-[20px]'>
            <p data-aos="fade-down" data-aos-delay="500" className='text-sm lg:text-lg uppercase'>lorem impsum dol amet</p>
            <h1 data-aos="fade-right" data-aos-delay="700" className='text-xl lg:text-7xl text-base-100'>Hell this is first Slide.</h1>
            <p data-aos="zoom-in" data-aos-delay="900" className='lg:py-4 hidden lg:block lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
            <button data-aos="fade-left" data-aos-delay="900" className='btn btn-primary btn-sm lg:btn-lg'> Explore More</button>
          </div>

          <img className='w-full' src={slider2} alt="Slider-1" />
        </div>
        <div className='lg:relative lg:h-[520px] h-auto'>
          <div className='absolute z-50 lg:inset-y-1/3 lg:left-20 lg:w-2/4 w-full left-[20px] top-[20px]'>
            <p className='text-sm lg:text-lg uppercase'>lorem impsum dol amet</p>
            <h1 className='text-xl lg:text-7xl text-base-100'>Hell this is first Slide.</h1>
            <p className='lg:py-4 hidden lg:block lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
            <button className='btn btn-primary btn-sm lg:btn-lg'> Explore More</button>
          </div>
          <img className='w-full' src={slider3} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default HomeSlider;