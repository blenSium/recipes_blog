import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useNavigate } from 'react-router-dom'





export default function Blog() {
  const navigate = useNavigate()
  return (
    <>
    <Header/>
    <div className='m-auto w-1/6 flex justify-around'>
    <button className='underline' onClick={()=>navigate('/feed')}>כל המתכונים</button>
    <button className='underline' onClick={()=>navigate('/courses')}>סדנאות</button>
    </div>
    <Outlet/>
    </>
  )
}
