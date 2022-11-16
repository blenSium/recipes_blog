import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Courses() {
    const[courses, setCourses] = useState([])

    const getAllCourses = async()=>{
        const {data} = await axios.get("http://localhost:8000/courses")
        setCourses(data)
    }

    useEffect(()=>{
        getAllCourses()
    })
  return (
    <div className="flex flex-wrap justify-around mt-20">
        {courses.map((course)=>(
      <div key={course._id} className="flex justify-center mt-5">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <img
              className="rounded-t-lg h-2/4 w-full"
              src={course.img}
              alt="course"
            />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{course.name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {course.description}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {course.date} הסדנה תתקיים בתאריך 
            </p>
          </div>
        </div>
      </div>
))}
    </div>
  );
}
