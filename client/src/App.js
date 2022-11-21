import React from 'react'
import Blog from './components/Blog'
import { Routes, Route } from "react-router-dom";
import Profile from './components/Profile'
import UserProfile from './components/UserProfile';
import PostsFeed from './components/PostsFeed'
import Courses from './components/Courses';
import RecipePage from './components/RecipePage';
import Footer from './components/Footer'
import NewPost from './components/NewPost';





export default function App() {
  return (
    <div>
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
