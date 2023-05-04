import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';
import { BsUpload } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const EditProject = () => {
  const project = useLoaderData();
  const [title, setTitle] = useState(project.title);
  const [slug, setSlug] = useState(project.slug);
  const [completeTime, setCompleteTime] = useState(project.completeTime);
  const [previewImage, setPreveiwImage] = useState(project.projectImage);
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    createSlug(event.target.value)
  };

  const handleCompleteTime = (event) => {
    setCompleteTime(event.target.value);
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreveiwImage(reader.result);
    };
    event.target.value = null; // Reset file input element
  };


  const handleImageDelete = () => {
    setPreveiwImage(null);
  };

  const imgStorageKey = `348fd38869294119e84c9f1e5e543cda`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    /* Get Current Date For Insert Date. */
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const todayDate = currentDate.toLocaleDateString('en-US', options);

    let projectImage = project.projectImage; // use the existing image by default

    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      const imgbbResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${imgStorageKey}`, formData);
      projectImage = imgbbResponse.data.data.url;
    }

    const token = localStorage.getItem('token');
    /* Update the project data to the Express News API */
    const updatedProjectData = {
      title,
      slug,
      projectImage,
      completeTime,
      date: todayDate,
      author: user.name
    };

    await axios.put(`https://server.wathincompanyltd.com/api/update-project/${project.slug}`, updatedProjectData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    toast.success('Project Updated Successfully!');

    /* Reset the form fields */
    setTitle('');
    setSlug('');
    setPreveiwImage(null);
    setCompleteTime('');
  };


  const createSlug = async (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-') // replace consecutive hyphens with a single hyphen
      .trim()

    setSlug(slug);
  }

  return (
    <>
      <div className="w-full mt-4">
        <div className="flex-col">
          <div className="card shadow-2xl bg-slate-100 rounded-md lg:mx-24">
            <div className="text-center lg:text-left px-8 mt-8">
              <h1 className="text-4xl font-bold text-primary">Edit Project:</h1>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Ptoject Title</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    defaultValue={project.title}
                    onChange={handleTitleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Slug</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={slug}
                    readOnly
                  />
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-2'>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Upload Project Image</span>
                    </label>
                    <div>
                      <label className="image-upload-button">
                        <div className='flex justify-start gap-4 items-center'>
                          <BsUpload className='tex-2xl font-bold' />
                          Upload Image
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
                        </div>
                      </label>
                    </div>

                  </div>

                  <div className="form-control">
                    {previewImage ?
                      (
                        <div className="image-preview">
                          <img className='relative rounded-lg' src={previewImage} alt="preview" />
                          <button className="delete-button" onClick={handleImageDelete}><FaTrash /></button>
                        </div>
                      )
                      :
                      (
                        <img
                          src="https://zdaasstorage.blob.core.windows.net/zdwebcontainer/2022/10/nopreview.png"
                          alt="default preview"
                          className="default-preview-image mt-2"
                        />
                      )}
                  </div>

                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Complete Time:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Project Completed Time"
                    className="input input-bordered"
                    value={completeTime}
                    onChange={handleCompleteTime}
                  />
                </div>

                <div className="form-control mt-6">
                  <button type='submit' className="btn btn-secondary">Save Change</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProject;