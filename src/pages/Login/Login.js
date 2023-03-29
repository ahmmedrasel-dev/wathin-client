import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  useTitle('Login')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Check if email and password are provided
    if (!email || !password) {
      toast.error('Please provide email and password');
      return;
    }

    try {
      await signInUser(email, password);
      form.reset();
      toast.success('Login Successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }

  }


  return (
    <>
      <div className="hero bg-slate-200 py-8">
        <div className="hero-content flex-col">
          <h1 className='text-2xl uppercase'>Please Login Now</h1>

          <div className="card shadow-2xl bg-slate-100">
            <form onSubmit={handleSubmit} className="card-body lg:w-[500px] w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type='submit'>Login</button>
              </div>
              <p>New to Wathin? <span className='text-primary cursor-pointer' onClick={() => navigate('/register')}>Create new account</span></p>
            </form>


          </div>
        </div>
      </div>
    </>
  );
};

export default Login;