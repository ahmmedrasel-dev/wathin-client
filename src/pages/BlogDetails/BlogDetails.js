import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
  const news = useLoaderData();
  const { title, blog_thumbnail, date, author, blog_details } = news
  return (
    <section className='bg-base-200'>
      <div className='flex justify-between lg:px-20 lg:py-10 bg-base-300'>
        <h2 className='text-black text-2xl'>News</h2>

        <div className="text-sm breadcrumbs">
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/news'>News</a></li>
          </ul>
        </div>
      </div>

      <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto py-20'>
        <div className='flex justify-between gap-6'>
          <div className="md:w-[75%]">
            <div className='w-full h-[500px]'>
              <img className='w-full h-full' src={blog_thumbnail} alt="" />
            </div>
            <div className='py-4'>
              <h1 className='text-3xl font-semibold'>{title}</h1>
              <small>{author}</small>
            </div>
            <div className='mt-4'>
              <p>{blog_details}</p>
            </div>
          </div>

          <div className="md:w-[25%]">
            <h2 className='text-2xl uppercase'>Latest News</h2>

            <div className='flex justify-start gap-6 py-6'>
              <div className='bg-base-100 p-1 rounded-md'>
                <img className='w-[60px] h-[60px] rounded-md shadow-md' src={blog_thumbnail} alt="" />
              </div>

              <div>
                <p>{title}</p>
                <small>{date}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;