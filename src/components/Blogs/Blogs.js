import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [])
  return (
    <div className='p-20 bg-slate-300'>
      <div className='text-center pb-12'>
        <p className='uppercase text-3xl font-semibold'>Latest <span className='text-error'>News & Blogs</span></p>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        {
          blogs.slice(0, 6).map(blog => <Blog
            key={blog._id}
            blog={blog}
          ></Blog>)
        }
      </div>

      <div className='flex justify-center pt-12'>
        <button className='btn btn-error'>Read All Blogs</button>
      </div>
    </div>
  );
};

export default Blogs;