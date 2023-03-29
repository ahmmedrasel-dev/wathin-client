import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';

const Users = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(`https://server.wathincompanyltd.com/api/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUser(data)
      setLoading(false);
    }
    getUsers();
  }, [])

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://server.wathincompanyltd.com/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (response.status === 200) {
      toast.error('Users Deleted Successfully!')
      setUser(prevNews => prevNews.filter(item => item._id !== id))
    }
  }

  const handleMakeAdmin = async (id) => {

    const response = await axios.put(`https://server.wathincompanyltd.com/api/user/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });


    if (response.status === 200) {
      setUser(prevUsers => {
        const updatedUsers = prevUsers.map(user => {
          if (user._id === id) {
            return { ...user, role: 'admin' };
          }
          return user;
        });
        return updatedUsers;
      });
      toast.success('Admin Created Successfully!');
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <h1 className='text-2xl uppercase font-bold py-4'>Users List:</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.length > 0 && user.map((item, index) => <tr
                key={item._id}
              >
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item?.role}</td>
                <td className='flex gap-4'>
                  <button className='btn btn-warning btn-sm' onClick={() => handleMakeAdmin(item._id)}>Make Admin</button>
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

export default Users;