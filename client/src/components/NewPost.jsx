import axios from "axios";
import React from "react";
import { useState } from "react";

export default function NewPost({ visible, onClose }) {
  const userId = sessionStorage.getItem("userId");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [ingredient, setIngredients] = useState([]);
  const [input, setInput] = useState("");
  const [post, setPost] = useState({ userId: userId, recipe: ingredient });
  if (!visible) return null;

  const uploadImg = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axios.post(
        "http://localhost:8000/upload",
        formData
      );
      console.log("uploadImg");
      setImgUrl(data);
      console.log(imgUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const getIngredients = () => {
    ingredient.push(input);
    console.log(ingredient);
  };

  const handleInput = async (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value, img: imgUrl });
    console.log(post);
  };
  const addPost = async (obj) => {
    const { data } = axios.post("http://localhost:8000/posts", obj);
    return data;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 min-h-screen flex ">
      <div className="container max-w-sm mx-auto flex-1 w-screen md:flex hidden items-center justify-between px-2">
        <div className="bg-yellow-100 px-6 py-8 rounded shadow-md text-black w-full h-5/6">
          <h2 className="text-center">Demo</h2>
          <p>{post.title}</p>
          <div style={{ width: "100%", height: "200px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={`./upload/${post.img}`}
              className="w-full h-full"
            />
          </div>
          <p>{post.description}</p>
          <ul>
            {post.recipe.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container max-w-sm mx-auto flex-1 w-screen flex items-center justify-between px-2">
        <div
          className=" px-6 py-8 rounded shadow-md text-black w-full"
          style={{ backgroundColor: "#E0D6D4" }}
        >
          <h2 className="text-center">New Recipe</h2>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Name"
            name="title"
            onChange={handleInput}
          />

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="user_avatar"
          >
            Upload Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={() => uploadImg()}>Upload</button>

          <textarea
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Description"
            name="description"
            onChange={handleInput}
          />
          <div className="flex">
            <input
              type={"text"}
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Ingredients"
              name="recipe"
              onChange={getInput}
            />
            <button onClick={() => getIngredients()}>add</button>
          </div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Time"
            name="time"
            onChange={handleInput}
          />

          <button onClick={() => addPost(post)}>Add</button>
          <button
            className="inline-block px-6 py-2 underline font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={onClose}
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
}
