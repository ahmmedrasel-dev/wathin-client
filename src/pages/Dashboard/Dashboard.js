import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="flex flex-col items-center mt-8">
      <p className="text-2xl">Hi, <span className="text-error">{user.name}</span></p>
      <h1 className="text-4xl">Wellcome to Dashboard</h1>
    </div>
  );
};

export default Dashboard;