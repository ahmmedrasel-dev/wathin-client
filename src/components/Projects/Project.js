import React from 'react';

const Project = ({ project }) => {
  const { name, project_image } = project;
  return (
    <div className='relative project_main cursor-pointer w-full bg-cover' style={{ backgroundImage: `url(${project_image})` }}>
      <div className='project-details'>
        <h1 className='font-bold text-white text-2xl title'>{name}</h1>
        <p className='text-white py-6 text-lg leading-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nostrum quas libero quia saepe officia recusandae vero? Tempora repudiandae provident distinctio fugiat porro sed quaerat. Vero voluptate odit dolorem expedita!</p>
      </div>
    </div>
  );
};

export default Project;