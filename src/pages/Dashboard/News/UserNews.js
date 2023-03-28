import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../context/UserContext';

const UserNews = () => {
  const [news, setNews] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const getNews = async () => {
      const { data } = await axios.get(`https://server.wathincompanyltd.com/api/auth-news?author=${user.name}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setNews(data)
      setLoading(false)
    }
    getNews();
  }, [user])

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://server.wathincompanyltd.com/api/news/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (response.status === 200) {
      toast.error('Your News Deleted Successfully!')
      setNews(prevNews => prevNews.filter(item => item._id !== id))
    }


  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <h1 className='text-2xl uppercase font-bold py-4'>Project List:</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Author</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              news.length > 0 && news.map((item, index) => <tr
                key={item._id}
              >
                <th>{index + 1}</th>
                <td><img src={item.imageUrl} className="w-10" alt="" /></td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
                <td className='flex gap-4'>
                  <button className='btn btn-primary btn-sm' onClick={() => navigate(`/news/${item.slug}`)}>view</button>
                  <button className='btn btn-error btn-sm' onClick={() => handleDelete(item._id)} >Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserNews;