import React from 'react';

const Project = ({ project }) => {
  const { title, projectImage, projectDetails } = project;
  return (
    <div className='relative project_main cursor-pointer w-full bg-cover' style={{ backgroundImage: `url(${projectImage})` }}>
      <div className='project-details'>
        <h1 className='font-bold text-white text-2xl title mb-4'>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: projectDetails }}></p>
      </div>
    </div>
  );
};

export default Project;