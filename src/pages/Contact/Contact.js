import React from 'react';
import { BsFillTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs'
import useTitle from '../../hooks/useTitle';

const Contact = () => {
  useTitle('Contact')

  return (
    <>
      <div className="w-full bg-slate-200 mx-auto lg:p-20 p-4">
        <div className="flex-col">
          <div className='grid mb-20 lg:grid-cols-3 gap-8 grid-cols-1 justify-center'>
            <div className='flex flex-col items-center'>
              <BsFillTelephoneFill className='text-5xl text-primary' />
              <h3 className='text-3xl py-3'>Phone</h3>
              <h5 className='text-3xl'>(618) 416-2680</h5>
            </div>

            <div className='flex flex-col items-center'>
              <BsEnvelopeFill className='text-5xl text-primary' />
              <h3 className='text-3xl py-3'>Email</h3>
              <h5 className='text-3xl'>info@wathin.com</h5>
            </div>

            <div className='flex flex-col items-center'>
              <BsGeoAltFill className='text-5xl text-primary' />
              <h3 className='text-3xl py-3'>Address</h3>
              <h5 className='text-3xl text-center'>Riyad, Abdulaziz Road<br /> Saudi Arabia</h5>
            </div>
          </div>

          <div className="card shadow-2xl bg-slate-100 rounded-md lg:mx-24">
            <div className="text-center lg:text-left px-8 mt-8">
              <h1 className="text-5xl font-bold text-primary">Get in touch</h1>
            </div>

            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered" />
              </div>
              <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-2'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Email" className="input input-bordered" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="tell" placeholder="Phone" className="input input-bordered" />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write Message</span>
                </label>
                <textarea placeholder="Message..." className="textarea textarea-bordered textarea-md w-full" ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;