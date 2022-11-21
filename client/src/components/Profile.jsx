import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";




export default function Profile() {
  const [usersPosts, setUsersPosts] = useState([]);
  const [user, setUser] = useState({});
const navigate = useNavigate()
  const userId = sessionStorage.getItem("userId");


  const getUsersPosts = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/posts?userId=${userId}`
    );
    setUsersPosts(data);
  };
  const getUser = async () => {
    const { data } = await axios.get(`http://localhost:8000/users/${userId}`);
    setUser(data);
    console.log(data)
  };

  useEffect(() => {
    getUsersPosts();
    getUser();
  }, [usersPosts]);


  return (
    <div style={{minHeight:'600px'}}>
      <Nav/>
      <div className="bg-pink-200 w-64 p-2">
        <h1 className="text-center font-bold text-5xl" style={{fontFamily:'Lobster'}}>{user.fullName}</h1>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="text-center text-7xl" style={{fontFamily:'Lobster'}}>My Recipes</p>
        <button
          type="button"
          className="py-2 px-5 mx-4 pb-7  text-lg underline font-medium hover:text-pink-400"
          onClick={()=> navigate("/newPost")}
        >
          New Post
        </button>
      </div>
      {usersPosts.length == 0 ? <p className="text-center text-xl">הוסיפו את המתכון הראשון שלכם</p> : null}
      <div className="m-auto flex flex-wrap justify-around w-full">
        {usersPosts.map((post) => (
          <div key={post._id}>
          <RecipeCard recipe={post} profile={'yes'}/>
          </div>
        ))}
      </div>
    </div>
  );
}
