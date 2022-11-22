import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'


export default function Blog() {
  const navigate = useNavigate()
  return (
    <>
    <Header/>
    <div className='m-auto w-2/4 md:w-1/6 flex justify-between my-24'>
    <button className='underline font-bold hover:text-pink-400' onClick={()=>navigate('/courses')}>סדנאות</button>
    <button className='underline font-bold hover:text-pink-400' onClick={()=>navigate('/feed')}>כל המתכונים</button>
    </div>
    <Outlet/>
    </>
  )
}
