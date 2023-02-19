import React, { useEffect, useState } from 'react';
import Project from './Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import 'swiper/css/navigation';
import 'swiper/css';
import './project.css'
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div className='pt-20 pb-6 lg:px-0 px-4'>
      <div className='text-center pb-12'>
        <p className='uppercase text-3xl font-semibold'>Our <span className='text-error'>Projects</span></p>
      </div>

      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        slidesPerView={3}
        breakpoints={{
          1100: {
            slidesPerView: 3
          },
          850: {
            slidesPerView: 3
          },
          650: {
            slidesPerView: 2
          },
          200: {
            slidesPerView: 1
          }
        }}

      >
        {
          projects.map(project => (
            <SwiperSlide>
              <Project
                key={project._id}
                project={project}
              ></Project>
            </SwiperSlide>
          ))
        }

        <div className='swiper-button-next slide_next_btn bg-gray-900'><FaAngleRight className='text-white flex justify-center items-center hover:text-primary text-2xl duration-200' /></div>
        <div className='swiper-button-prev slide_prev_btn bg-gray-900'><FaAngleLeft className='text-white hover:text-primary text-2xl duration-200 ' /></div>
      </Swiper>

    </div>
  );
};

export default Projects;