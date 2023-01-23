import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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

      <Slider {...settings}>
        {
          projects.map(project => <Project
            key={project._id}
            project={project}
          ></Project>)
        }

      </Slider>

    </div>
  );
};

export default Projects;