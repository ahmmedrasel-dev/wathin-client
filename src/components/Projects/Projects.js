import React, { useEffect, useState } from 'react';
import Project from './Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import './project.css'
import 'swiper/css';
import "swiper/css/pagination";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div className='py-20'>
      <div className='text-center pb-12'>
        <p className='uppercase text-3xl font-semibold'>Our <span className='text-error'>Projects</span></p>
      </div>

      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="my_project_slider"
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
      </Swiper>

    </div>
  );
};

export default Projects;