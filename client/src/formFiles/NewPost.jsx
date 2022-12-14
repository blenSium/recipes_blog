import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const userId = sessionStorage.getItem("userId");
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("https://res.cloudinary.com/dijq5lrt4/image/upload/v1671745507/recipes/xbmgqhweofflvz7cckzh.png");
  const [ingredient, setIngredients] = useState([]);
  const [input, setInput] = useState("");
  const [post, setPost] = useState({ userId: userId });
  const navigate = useNavigate();

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const getIngredients = () => {
    setIngredients([...ingredient, input]);
  };

  const handleInput = async (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
      img: imgUrl,
      recipe: ingredient
    });
    console.log(post)
  };

  const addPost = async (obj) => {
    const { data } = await axios.post(`https://nice-erin-cricket-boot.cyclic.app/posts`, obj);
    return data;
  };

  const handleImg = (e)=>{
    const file = e.target.files[0];
    setFileToBase(file);
  }


  const setFileToBase = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setImgUrl(reader.result)
    }
  }




  return (
    <div className="text-right">
      <div
        className="w-full md:w-3/4 m-auto flex flex-col md:p-20 p-10 h-4/6 mt-10 mb-40"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        <div
          className=" px-6 py-8 rounded shadow-md text-black w-full"
          style={{ backgroundColor: "#E0D6D4" }}
        >
          <h2 className="text-center text-5xl my-5 font-bold">הוספת מתכון</h2>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-right"
            placeholder="שם מתכון"
            name="title"
            onChange={handleInput}
          />

          <p className="my-2">{post.title}</p>
          <div className="md:flex md:justify-between">
            <input
              className="block text-right w-full md:w-3/4  text-sm text-gray-900 bg-gray-50 rounded-lg border "
              type="file"
              onChange={handleImg}
            />
            {/* <button onClick={() => uploadImg()}>לחץ לאחר בחירת הקובץ</button> */}
          </div>
          <div
            className="my-6 mx-auto"
            style={{ width: "80%", height: "200px" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={`${imgUrl}`}
              className="w-full h-full"
            />
          </div>

          <textarea
            className="block text-right border border-grey-light w-full p-3 rounded mb-4"
            placeholder="תיאור"
            name="description"
            onChange={handleInput}
          />
          <p className="my-2">{post.description}</p>

          <div className="flex">
            <button className="underline mx-4" onClick={() => getIngredients()}>
              הוסף
            </button>
            <input
              type={"text"}
              className="block text-right border border-grey-light w-3/4 p-3 rounded mb-4"
              placeholder="לאחר כל שורת מצרכים לחץ על הוסף"
              name="recipe"
              onChange={getInput}
            />
          </div>

          <ul className="my-2">
            {ingredient.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>

          <textarea
            className="block border text-right border-grey-light w-full p-3 rounded mb-4"
            placeholder="אופן הכנה"
            name="preparation"
            onChange={handleInput}
          />
          <p className="my-2">{post.preparation}</p>
          <input
            type="text"
            className="block text-right border border-grey-light w-full p-3 rounded mb-4"
            placeholder="זמן הכנה"
            name="time"
            onChange={handleInput}
          />
          <p className="my-2">{post.time}</p>

          <button
            className="text-lg hover:underline"
            onClick={() => {
              addPost(post);
              navigate("/profile");
            }}
          >
            {" "}
            הוסף מתכון
          </button>
        </div>
      </div>
    </div>
  );
}
