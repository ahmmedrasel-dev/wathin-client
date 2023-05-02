import React from 'react';
import { BsFillTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs'
import useTitle from '../../hooks/useTitle';

const Contact = () => {
  useTitle('Contact')

  return (
    <>
      <div className="w-full bg-slate-200 mx-auto lg:py-20 lg:px-32 p-4">
        <div className="flex-col">
          <div className="card">
            <div className="text-center px-12 mt-8">
              <p className='uppercase text-3xl font-semibold title'>Get In Touch</p>
            </div>

            <div className="card-body px-16">
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

              <div className="form-control mt-6 flex justify-center items-center">
                <button className="btn btn-primary w-48 text-white">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;