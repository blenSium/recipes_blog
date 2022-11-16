import axios from "axios";
import React from "react";
import { useState } from "react";


export default function NewPost({ visible, onClose }) {
  const userId = sessionStorage.getItem("userId");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [post, setPost] = useState({ userId: userId });
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
      console.log(data);
      setImgUrl(data);
      console.log(imgUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = async (e) => {
    e.preventDefault();
    // const imgUrl =await uploadImg()
    setPost({ ...post, [e.target.name]: e.target.value, img: imgUrl });
    // console.log(post)
  };
  const addPost = async (obj) => {
    const { data } = axios.post("http://localhost:8000/posts", obj);
    return data;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div
          className=" px-6 py-8 rounded shadow-md text-black w-full"
          style={{ backgroundColor: "#E0D6D4" }}
        >
          <h2 className="text-center">New Recipe</h2>
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

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Name"
            name="title"
            onChange={handleInput}
          />

          <textarea
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Description"
            name="description"
            onChange={handleInput}
          />
          <textarea
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Recipe"
            name="recipe"
            onChange={handleInput}
          />
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
