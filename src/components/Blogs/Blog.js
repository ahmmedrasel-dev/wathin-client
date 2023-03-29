import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';

const Blog = ({ blog }) => {

  if (!blog) {
    return null;
  }

  const { title, date, imageUrl, content, author, slug } = blog;
  const postDate = new Date(date);
  let day = (postDate.getDate().toString().length < 2 ? "0" + postDate.getDate().toString() : postDate.getDate());
  let month = postDate.toLocaleString('en-US', { month: 'short' })

  return (
    <div>
      <div className='relative mb-8'>
        <img src={imageUrl} className="h-[300px] w-full" alt={title} />
        <div className='bg-primary w-20 h-20 flex flex-col justify-center items-center absolute -bottom-8 left-4'>
          <span className='text-white text-2xl font-bold'>{day}</span>
          <span className='text-white font-semibold text-xl'>{month}</span>
        </div>
      </div>
      <div className="p-4">
        <small className='text-primary'>{author}</small>
        <h2 className="text-xl font-semibold mb-2 text-secondary">
          {title}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: content.slice(0, 60) + ' ...' }}></p>
      </div>
      <div className='flex items-center pl-2'>
        <FaCaretRight className='text-primary text-xl' />
        <NavLink className="text-primary uppercase" to={`/news/${slug}`}>Read More</NavLink>
      </div>
    </div>
  );
};

export default Blog;