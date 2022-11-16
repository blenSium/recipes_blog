import React from 'react'
import Blog from './components/Blog'
import { Routes, Route } from "react-router-dom";
import Profile from './components/Profile'
import UserProfile from './components/UserProfile';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/:id' element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}
