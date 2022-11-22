import React from 'react'
import Blog from './pages/Blog'
import { Routes, Route } from "react-router-dom";
import Profile from './profiles/Profile'
import UserProfile from './profiles/UserProfile';
import PostsFeed from './pages/PostsFeed'
import Courses from './pages/Courses';
import RecipePage from './pages/RecipePage';
import Footer from './components/Footer'
import NewPost from './formFiles/NewPost';
import NavBar from './components/NavBar';





export default function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Blog/>}>
          <Route path='/feed' element={<PostsFeed/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Route>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/:id' element={<UserProfile/>}/>
        <Route path='/recipe/:id' element={<RecipePage/>}/>
        <Route path='/newPost' element={<NewPost/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
