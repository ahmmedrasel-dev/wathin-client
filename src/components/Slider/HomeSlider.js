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
    <section>
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
          <div className='lg:relative lg:h-[550px] h-[300px] w-full'>
            <div className='absolute z-50 lg:inset-y-1/3 lg:left-20 lg:w-2/4 w-full  top-[100px] text-center lg:text-left xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto'>
              <p className='text-sm lg:text-lg uppercase text-black'>lorem impsum dol amet</p>
              <h1 className='text-3xl lg:text-7xl py-6 text-primary'>Hello this is first Slide.</h1>
              <p className='lg:py-4 hidden lg:block lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
              <button className='btn btn-primary text-white btn-md lg:btn-lg'> Explore More</button>
            </div>

            <img className='h-full w-full' src={slider2} alt="Slider-1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='lg:relative lg:h-[550px] h-[300px]'>
            <div className='absolute z-50 lg:inset-y-1/3 lg:left-20 lg:w-2/4 w-full top-[100px] text-center lg:text-left xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto'>
              <p className='text-sm lg:text-lg uppercase'>lorem impsum dol amet</p>
              <h1 className='text-3xl lg:text-7xl text-primary py-6'>Hello this is first Slide.</h1>
              <p className='lg:py-4 hidden lg:block lg:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta aliquid iure doloribus incidunt architecto praesentium quos cupiditate fugiat quia.</p>
              <button className='btn btn-primary text-white btn-md lg:btn-lg'> Explore More</button>
            </div>
            <img className='h-full w-full' src={slider3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlider;