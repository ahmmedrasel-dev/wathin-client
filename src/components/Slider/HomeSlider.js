import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from "swiper";
import slider2 from '../../assets/images/slider2.jpeg'
import slider3 from '../../assets/images/slider3.jpeg'
import './home.slider.css';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';


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

        <SwiperSlide>
          <div className="overlay">
            <img className='h-full w-full relative z-[-1]' src={slider2} alt="Slider-1" />
            <div className='absolute lg:w-[70%] w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center'>
              <div className="text-center slider-inside-content">
                <p className='lg:py-4 lg:text-3xl text-white lg:leading-[3rem]'>GROW YOUR BUSINESS WITH SKILLED AND QUALIFIED<br />
                  <span className='text-primary'>MANPOWER</span> IN YOUR CONSTRUCTION SITE</p>
              </div>
              <Link to="/about"><button className='btn btn-primary text-white btn-md lg:btn-lg mt-10'> Explore More</button></Link>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className="overlay">
            <img className='h-full w-full relative z-[-1]' src={slider3} alt="Slider-1" />
            <div className='absolute lg:w-[70%] w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center'>
              <div className="text-center slider-inside-content">
                <p className='lg:py-4 lg:text-3xl uppercase text-white lg:leading-[4rem]'>build your vision with
                  <span className='text-primary'> perfection</span></p>
              </div>
              <Link to="/about"><button className='btn btn-primary text-white btn-md lg:btn-lg mt-10'> Explore More</button></Link>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlider;