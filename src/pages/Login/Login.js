import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        form.reset();
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="hero bg-slate-200 py-8">
        <div className="hero-content flex-col">
          <h1 className='text-2xl uppercase'>Please Login Now</h1>

          <div className="card shadow-2xl bg-slate-100">
            <form onSubmit={handleSubmit} className="card-body w-[500px]">
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