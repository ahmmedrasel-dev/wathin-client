import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const BlogDetails = () => {
  const news = useLoaderData();
  const [latestNews, setLatestNews] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useTitle('News Details')
  const { title, imageUrl, author, content, date, slug } = news;


  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(slug)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(slug)}&text=${encodeURIComponent(title)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(slug)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(content)}`;


  useEffect(() => {
    // Calculate the estimated reading time
    const wordCount = content.split(/\s+/).length;
    const readingSpeed = 250; // Assume reading speed of 200 words per minute
    const estimatedTime = Math.round(wordCount / readingSpeed);
    setReadingTime(estimatedTime);
  }, [content]);


  useEffect(() => {
    const url = `http://localhost:5000/api/latest-news`;
    const getData = async () => {
      const { data } = await axios.get(url);
      setLatestNews(data)
    }

    getData()
  }, []);



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
              <div className='flex justify-between mt-2'>
                <small className='text-primary'>{author}, {readingTime} Min Read</small>

                <small className='text-error'>{date}</small>
              </div>
            </div>
            <div className='mt-4'>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>

            <h2 className='text-xl font-bold'>Social Media Shere:</h2>
            <div className='flex gap-4'>
              <a href={facebookShareUrl} target="_blank">
                <FaFacebook className='text-3xl' />
              </a>
              <a href={twitterShareUrl} target="_blank">
                <FaTwitter className='text-3xl' />
              </a>
              <a href={linkedinShareUrl} target="_blank">
                <FaLinkedin className='text-3xl' />
              </a>
            </div>

          </div>

          <div className="md:w-[25%]">
            <h2 className='text-2xl uppercase text-primary'>Latest News</h2>

            {
              latestNews.map(item => <>
                <div
                  className='flex justify-start gap-6 py-6'
                >
                  <div className='bg-base-100 p-1 rounded-md'>
                    <img className='rounded-md shadow-md max-w-[100px]' src={item.imageUrl} alt="" />
                  </div>

                  <div>
                    <p className='font-bold'><Link to={`/news/${item.slug}`}>{item.title}</Link></p>
                    <div className='flex items-center gap-2 text-primary'>
                      <BsFillCalendarMinusFill />
                      <small>{item.date}</small>
                    </div>
                  </div>

                </div>
                < hr />
              </>
              )

            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;