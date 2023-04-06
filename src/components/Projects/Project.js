import React from 'react';

const Project = ({ project }) => {
  const { title, projectImage, completeTime } = project;
  return (
    <div className='relative project_main cursor-pointer w-full bg-cover mb-16' style={{ backgroundImage: `url(${projectImage})` }}>
      <div className='project-details'>
        <h1 className='font-bold text-white text-2xl project_title'>{title}</h1>
        <div className="divider"></div>
        <h2 className='font-bold text-white text-lg mb-4 complete-time'>{completeTime}</h2>
      </div>
    </div>
  );
};

export default Project;