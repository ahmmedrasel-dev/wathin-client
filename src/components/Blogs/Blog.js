import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';

const Blog = ({ blog }) => {
  const { title, date, blog_thumbnail, blog_details, author } = blog;
  const postDate = new Date(date);
  let day = (postDate.getDate().toString().length < 2 ? "0" + postDate.getDate().toString() : postDate.getDate());
  let month = postDate.toLocaleString('en-US', { month: 'short' })

  return (
    <div>
      <div className='relative mb-8'>
        <img src={blog_thumbnail} className="h-[300px] w-full" alt={title} />
        <div className='bg-error w-20 h-20 flex flex-col justify-center items-center absolute -bottom-8 left-4'>
          <span className='text-white text-2xl font-bold'>{day}</span>
          <span className='text-white font-semibold text-xl'>{month}</span>
        </div>
      </div>
      <div className="p-4">
        <small>{author}</small>
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>
        <p className='leading-loose pb-2'>{blog_details.slice(0, 120)}</p>
      </div>
      <div className='flex items-center pl-2'>
        <FaCaretRight className='text-error text-xl' />
        <NavLink className="text-error uppercase" to="/">Read More</NavLink>
      </div>
    </div>
  );
};

export default Blog;