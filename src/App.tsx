import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
 import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
import NotFound from './pages/NotFound';
import AllCourses from './pages/Courses/AllCourses';
import AddNewCourse from './pages/Courses/AddNewCourse';
import CourseRequest from './pages/Courses/CourseRequest';
import AddNewMentor from './pages/Mentor/AddNewMentor';
import AllMentors from './pages/Mentor/AllMentors';
import Dashboard from './pages/Dashboard/Dashboard';
import MentorDetails from './pages/Mentor/MentorDetails';
import EditMentor from './pages/Mentor/EditMentor';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/add" element={<AddNewCourse />} />
        <Route path="/courses/request" element={<CourseRequest/>} />

        <Route path="/mentors" element={<AllMentors />} />
        <Route path="/mentor/add" element={<AddNewMentor />} />
        <Route path="/mentor/details/:id" element={<MentorDetails />} />
        <Route path="/mentor/edit/:id" element={<EditMentor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
