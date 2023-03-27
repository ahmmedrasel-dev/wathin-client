import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getNews = async () => {
      const { data } = await axios.get(`https://server.wathincompanyltd.com/api/auth-project?author=${user.name}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setProjects(data)
    }
    getNews();
  }, [user])

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://server.wathincompanyltd.com/api/project/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (response.status === 200) {
      toast.error('Project Deleted Successfully!')
      setProjects(prevNews => prevNews.filter(item => item._id !== id))
    }
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
              <th>Project Title</th>
              <th>Author</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              projects.length > 0 && projects.map((item, index) => <tr
                key={item._id}
              >
                <th>{index + 1}</th>
                <td><img src={item.projectImage} className="w-10" alt="" /></td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
                <td className=''>
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

export default AllProjects;