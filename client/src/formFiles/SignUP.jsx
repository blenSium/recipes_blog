import axios from "axios";
import React from "react";
import { useState } from "react";
import cookItLogo from "../assets/cookit_logo.png";

export default function SignUP({ visible, onClose }) {
  const [user, setUser] = useState({});
  const [display, setDisplay] = useState('none');
  if (!visible) return null;

  const handleInput = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const addUser = async (newUser) => {
    const { data } = await axios.post("https://tame-lime-haddock-robe.cyclic.app/users", newUser);
    setDisplay('block')
    return data;
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 h-1/4">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div className="sm:text-3xl text-2xl font-semibold mb-8">
              <img src={cookItLogo} width={"40%"} alt="logo" className="m-auto"/>
            </div>
            <div className="">
              <div>
                <input
                  type="text"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
                  placeholder="Full Name"
                  name='fullName'
                  onChange={handleInput}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
                  placeholder="Eamil Adress "
                  name='email'
                  onChange={handleInput}
                />
              </div>
              <div className="">
                <input
                  type="password"
                  className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                  placeholder="Password "
                  name="password"
                  onChange={handleInput}
                />
              </div>
              <div className="flex justify-center my-2">
                <button
                  className=" rounded-full  p-3 w-full sm:w-56  text-lg font-semibold "
                  style={{ backgroundColor: "#FCA2AD" }}
                  onClick={()=>addUser(user)}
                >
                  Create Account
                </button>
              </div>
              <div>
                <p style={{display:display}} className='text-lg text-pink-600 font-bold text-center'>Welcome...Now log in and start cooking </p>
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
    </div>
  );
}
