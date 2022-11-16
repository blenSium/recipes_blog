import React, { useState } from "react";
import cookItLogo from "../assets/cookit_logo.png";
import {useNavigate} from 'react-router-dom'

export default function Login({ visible, onClose }) {
    const [user, setUser] = useState({});
    const [msg, setMsg] = useState('');
    if (!visible) return null;

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fetchUsers = async (obj) => {
    const response = await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    response.json().then((data) => {
      if (data === null) {
        console.log("wrong username or password");
        setMsg("wrong username or password")
      } else {
        console.log(data.fullName);
        window.sessionStorage.setItem("userId",data._id)
        onClose()
      }
    });
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <img src={cookItLogo} alt="logo" />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            <p>{msg}</p>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
               style={{backgroundColor:'#FCA2AD'}}
               onClick={()=>fetchUsers(user)}>
                Sign In
              </button>
            </div>
            <div className="flex justify-between">
              <button
                className="inline-block px-6 py-2 underline font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                onClick={onClose}
              >
                back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
