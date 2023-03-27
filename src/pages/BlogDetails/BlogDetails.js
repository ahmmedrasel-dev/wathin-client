import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const BlogDetails = () => {
  const news = useLoaderData();
  useTitle('News Details')
  const { title, imageUrl, date, author, content } = news
  return (
    <section className='bg-white'>
      <div className='flex justify-between lg:px-20 lg:py-10 bg-slate-300'>
        <h2 className='text-secondary text-2xl'>News</h2>

        <div className="text-sm breadcrumbs">
          <ul>
            <li className='text-secondary'><a href='/'>Home</a></li>
            <li className='text-secondary'><a href='/news'>News</a></li>
          </ul>
        </div>
      </div>

      <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto py-20'>
        <div className='flex justify-between gap-6'>
          <div className="md:w-[75%]">
            <div className='w-full h-[500px]'>
              <img className='w-full h-full' src={imageUrl} alt="" />
            </div>
            <div className='py-4'>
              <h1 className='text-3xl font-semibold'>{title}</h1>
              <small className='text-primary'>{author}</small>
            </div>
            <div className='mt-4'>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          </div>

          <div className="md:w-[25%]">
            <h2 className='text-2xl uppercase text-primary'>Latest News</h2>

            <div className='flex justify-start gap-6 py-6'>
              <div className='bg-base-100 p-1 rounded-md'>
                <img className='w-[60px] h-[60px] rounded-md shadow-md' src={imageUrl} alt="" />
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