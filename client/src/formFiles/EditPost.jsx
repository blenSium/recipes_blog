import axios from "axios";
import React, { useState } from "react";

export default function EditPost({ postId, visible, onClose }) {
  const [select, setSelect] = useState("");
  const [updatedPost, setUpdated] = useState({});

  if (!visible) return null;

  const updatePost = async (obj) => {
    const { data } = await axios.put(
      `https://nice-erin-cricket-boot.cyclic.app/posts/${postId}`,
      obj
    );
    return data;
  };

  const setFileToBase = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setUpdated({ [select]: reader.result });
    }
  }

  const handleImg = (e)=>{
    const file = e.target.files[0];
    setFileToBase(file);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div
          className="px-6 py-8 rounded shadow-md text-right text-black w-full"
          style={{ backgroundColor: "#E0D6D4" }}
        >
          <h2 className="text-center text-xl "> עדכון מתכון </h2>
          <br />
          <select
            className="bg-gray-50 border mb-5 text-right pr-8 border-gray-300 w-full text-gray-900 text-sm rounded-lg "
            name="updates"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="title">שם מתכון</option>
            <option value="img">תמונה</option>
            <option value="description">תיאור</option>
            <option value="preparation">הוראות הכנה</option>
            <option value="time">זמן הכנה</option>
          </select>
          {select != "img" ? (
            <input
              type={"text"}
              placeholder={"עדכן"}
              onChange={(e) => setUpdated({ [select]: e.target.value })}
              className="bg-gray-50 border text-right pr-8 border-gray-300 w-full text-gray-900 text-sm rounded-lg"
            />
          ) : (
            <div>
              <input
                type={"file"}
                onChange={handleImg}
                className="bg-gray-50 border text-right my-4 pr-8 border-gray-300 w-full text-gray-900 text-sm rounded-lg"
              />
            </div>
          )}
          <div className="mt-8 flex justify-between">
            <button className="hover:underline" onClick={onClose}>
              ביטול
            </button>
            <button
              className="hover:underline"
              onClick={() => {
                updatePost(updatedPost);
                onClose();
              }}
            >
              בצע שינוי
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
