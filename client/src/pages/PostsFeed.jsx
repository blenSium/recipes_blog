import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";


export default function PostsFeed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get("http://localhost:8000/posts");
      setPosts(data);
    };
    getPosts();
  }, [posts]);

  const filteredRecipes = () => {
   const array= posts.filter((post) => {
      if (post.title.includes(input)) {
         return post; }
     })
     if(array.length<=0){
      return posts
     }
     else{
      return array
     }
    };

  return (
    <div className="mt-20">
      <label className="sr-only">Search</label>
      <div className="relative w-2/3 md:w-2/4 m-auto mb-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          style={{ backgroundColor: "#E0D6D4" }}
          id="search"
          className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 h-16"
          placeholder="Search..."
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </div>
      <div className="m-auto flex flex-wrap justify-around">
        { 
          filteredRecipes()?.map((post) => (
            <div key={post._id} className="">
              <RecipeCard recipe={post} profile={'no'}/>
            </div>
          ))}
      </div>
    </div>
  );
}
