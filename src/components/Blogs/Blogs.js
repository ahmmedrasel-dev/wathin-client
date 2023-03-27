import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Blog from './Blog';
import './blogs.css'

const Blogs = () => {
  const [news, setNews] = useState([]);
  const [counts, setCounts] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const url = `http://localhost:5000/api/news?page=${currentPage}&itemPerPage=${itemsPerPage}`;

    const getData = async () => {
      const { data } = await axios.get(url);
      const { news, countNews } = data;
      setNews(news)
      setCounts(countNews)
    }

    getData()
  }, [currentPage, itemsPerPage])
  const pages = Math.ceil(counts / itemsPerPage);

  useTitle('News');


  return (
    <div className='lg:p-20 p-4 bg-slate-50'>
      <div className='text-center pb-12'>
        <p className='uppercase text-3xl font-semibold'>
          Latest <span className='text-primary'>News & Blogs</span>
        </p>
      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
        {news.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>

      <div className='flex justify-center pt-12'>
        <nav>
          <ul className='pagination'>
            {
              [...Array(pages).keys()].map(number => <button
                className={`btn m-3 ${currentPage === number && 'selected'}`}
                key={number}
                onClick={() => setCurrentPage(number)}
              >
                {number + 1}
              </button>)
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Blogs;
