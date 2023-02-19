import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper";
import slider2 from '../../assets/images/slider2.jpeg'
import slider3 from '../../assets/images/slider3.jpeg'
import './home.slider.css';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const HomeSlider = () => {

  return (
    <>

      <Swiper
        slidesPerView={1}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="home_slider"
      >
        <SwiperSlide >
          <div className='lg:relative  lg:h-[550px] h-[300px] w-full'>
            <div className='absolute z-50 lg:inset-y-1/3 lg:left-20 lg:w-2/4 w-full  top-[100px] text-center lg:text-left'>
              <p className='text-sm lg:text-lg uppercase'>lorem impsum dol amet</p>
              <h1 className='text-3xl lg:text-7xl text-base-100 py-6'>Hell this is first Slide.</h1>
              <p className='lg:py-4 hidden lg:block lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
              <button className='btn btn-primary btn-md lg:btn-lg'> Explore More</button>
            </div>

            <img className='h-full w-full' src={slider2} alt="Slider-1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='lg:relative lg:h-[550px] h-[300px]'>
            <div className='absolute z-50 lg:inset-y-1/3 lg:left-20 lg:w-2/4 w-full top-[100px] text-center lg:text-left'>
              <p className='text-sm lg:text-lg uppercase'>lorem impsum dol amet</p>
              <h1 className='text-3xl lg:text-7xl text-primary py-6'>Hell this is first Slide.</h1>
              <p className='lg:py-4 hidden lg:block lg:text-lg text-base-100'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
              <button className='btn btn-primary btn-md lg:btn-lg'> Explore More</button>
            </div>
            <img className='h-full w-full' src={slider3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;