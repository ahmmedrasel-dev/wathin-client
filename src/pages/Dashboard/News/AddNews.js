import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsUpload } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from '../../../context/UserContext';
import './news.css'

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [previewImage, setPreveiwImage] = useState(null);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const { user } = useContext(AuthContext);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'direction': 'rtl' }, { 'align': [] }],
      ['clean']
    ]
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    createSlug(event.target.value)
  };



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

    /* Upload the image to imgbb API and get the image URL */
    const formData = new FormData();
    formData.append('image', image);
    const imgbbResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${imgStorageKey}`, formData);
    const imageUrl = imgbbResponse.data.data.url;
    const token = localStorage.getItem('token')
    /* Save the form data to the Express News API */
    const newsData = {
      title,
      slug,
      imageUrl,
      content,
      date: todayDate,
      author: user.name
    };
    await axios.post('https://server.wathincompanyltd.com/api/add-news', newsData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    toast.success('News Created Successfully!')
    /* Reset the form fields */
    setTitle('');
    setSlug('');
    setPreveiwImage(null);
    setContent('');
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
              <h1 className="text-4xl font-bold text-primary">Add New Post:</h1>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your news title"
                    className="input input-bordered"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Slug</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your news title"
                    className="input input-bordered"
                    value={slug}
                    readOnly
                  />
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-2'>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Upload Feature Image</span>
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
                          className="default-preview-image"
                        />
                      )}
                  </div>

                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Post Deteials:</span>
                  </label>
                  <div>
                    <style>{`
        .ql-editor {
          height: 300px;
        }
      `}</style>

                    <ReactQuill
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      modules={modules}
                      placeholder="Write you post..."
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button type='submit' className="btn btn-secondary">Publish Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNews;