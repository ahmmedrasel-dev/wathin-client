import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log('Register User', user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <div className="hero bg-slate-200 py-8">
        <div className="hero-content flex-col">
          <h1 className='text-2xl uppercase'>Please Register Now</h1>

          <div className="card shadow-2xl bg-slate-100">
            <form onSubmit={handleSubmit} className="card-body w-[500px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
              </div>

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
                <button className="btn btn-primary" type='submit'>Register</button>
              </div>
              <p>Already Have an Account? <span className='text-primary cursor-pointer' onClick={() => navigate('/register')}>Please Login</span></p>
            </form>


          </div>
        </div>
      </div>
    </>
  );
};

export default Register;