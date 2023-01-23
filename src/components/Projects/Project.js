import React from 'react';

const Project = ({ project }) => {
  const { name, project_image } = project;
  return (
    <div className='relative cursor-pointer'>
      <img className='h-[320px] w-full' src={project_image} alt="" />
      <div className='absolute left-0 bottom-1  bg-secondary/75 w-full py-2 text-center'>
        <h1 className='font-bold text-white'>{name}</h1>
      </div>
    </div>
  );
};

export default Project;