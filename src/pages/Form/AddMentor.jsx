import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mentorAxiosInstance from '../../axiosInstance/mentorAxiosInstance';


const AddMentor = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState("");
  const [about, setAbout] = useState('');
  const [expertise, setExpertise] = useState('');
  const [rank, setRank] = useState('');
  const [rating, setRating] = useState('');

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };





  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    formData.append('about', about);
    formData.append('expertise', expertise);
    formData.append('rank', rank);
    formData.append('rating', rating);

    try {
      await mentorAxiosInstance.post('/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/mentors');
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
              <label className="mb-2.5 block text-black dark:text-white">Name</label>
              <input
                required
                type="text"
                placeholder="Mentor Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-black dark:text-white"> Mentor Image</label>
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
                  About
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write Something About of Mentor...."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Expertise</label>
                <input
                  required
                  type="text"
                  placeholder="Mentor's expertise"
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Rank</label>
                <input
                  required
                  type="text"
                  placeholder="Mentor's rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">Rating</label>
                <input
                  required
                  type="number"
                  placeholder="Mentor's rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
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

export default AddMentor