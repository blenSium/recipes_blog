import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


export default function Blog() {
  const[open, setOpen] = useState(true)


  const navigate = useNavigate()
  return (
    <>
    <Header/>
    <div className='m-auto w-1/6 flex justify-between my-24'>
    <button className='underline font-bold hover:text-pink-400' onClick={()=>navigate('/courses')}>סדנאות</button>
    <button className='underline font-bold hover:text-pink-400' onClick={()=>navigate('/feed')}>כל המתכונים</button>
    </div>
    <Outlet/>
    </>
  )
}
