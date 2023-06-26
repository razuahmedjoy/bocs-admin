import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import courseAxiosInstance from '../../axiosInstance/courseaxiosInstance';



const AddCourse = () => {

  const navigate = useNavigate();

  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [overview, setOverview] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState("");
  const [regularprice, setRegularprice] = useState('');
  const [offerprice, setOfferprice] = useState('');
  const [status, setStatus] = useState('');
  const [timespan, setTimespan] = useState('');

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('overview', overview);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('regularprice', regularprice);
    formData.append('offerprice', offerprice);
    formData.append('status', status);
    formData.append('timespan', timespan);

    try {
      await courseAxiosInstance.post('/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/courses');
    } catch (error) {
      console.error('Error creating mentor:', error);
    }
  };


  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="p-6.5">

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">category</label>
              <input
                required
                type="text"
                placeholder="Course category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">Title</label>
              <input
                required
                type="text"
                placeholder="Course title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-black dark:text-white"> Course Image</label>
              <div className='flex items-center'>
                <div className="file">
                  {preview ? (
                    <figure className="image is-128x128">
                      <img className='h-15 w-15 rounded' src={preview} alt="Preview Image" />
                    </figure>
                  ) : (
                    ""
                  )}
                </div>
                <div className='ml-4'>
                  <input id='mentorIMg'
                    type="file"
                    onChange={loadImage}
                    className="hidden w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                  />
                  <label htmlFor="mentorIMg">Choose a file...</label>
                </div>
              </div>
            </div>


              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                 Description
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write Something About of Course...."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                Overview
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write Course overview...."
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Regularprice</label>
                <input
                  required
                  type="number"
                  placeholder="Course Regularprice"
                  value={regularprice}
                  onChange={(e) => setRegularprice(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Offerprice</label>
                <input
                  type="number"
                  placeholder="Course offerprice"
                  value={offerprice}
                  onChange={(e) => setOfferprice(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              {/* <div>
                <label className="mb-3 block text-black dark:text-white">
                  Select Country
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                          fill="#637381"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                          fill="#637381"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    <option value="">USA</option>
                    <option value="">UK</option>
                    <option value="">Canada</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div> */}



              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Status</label>
                <input
                  type="text"
                  placeholder="Course status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Timespan</label>
                <input
                  type="text"
                  placeholder="Course timespan"
                  value={timespan}
                  onChange={(e) => setTimespan(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <button type='submit' className="flex w-1/4 m-auto justify-center  rounded bg-primary p-3 font-medium text-gray">
                Submit
              </button>
            </div>
        </form>
      </div>

    </>
  )
}

export default AddCourse