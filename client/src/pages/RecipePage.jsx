import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CommentInput from "../components/CommentInput";
import CommentsSection from "../components/CommentsSection";

export default function RecipePage() {
  const [post, setPost] = useState({});
  const [recipe, setRecipes] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState("none");
  const [comment, setComment] = useState("none");
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  const getPostRecipe = async () => {
    const { data } = await axios.get(
      `https://tame-lime-haddock-robe.cyclic.app/posts/${id}`
    );
    setPost(data);
    setRecipes(data.recipe);
  };

  const getUser = async () => {
    if (post.userId) {
      const { data } = await axios.get(
        `https://tame-lime-haddock-robe.cyclic.app/users/${post.userId}`
      );
      setUser(data);
    }
  };

  useEffect(() => {
    getPostRecipe();
  }, []);

  useEffect(() => {
    getUser();
  }, [recipe]);

  const addComment = () => {
    if (userId) {
      setComment("block");
    } else {
      setAlert("flex");
    }
  };

  return (
    <div>
      <div
        className="w-full md:w-3/4 m-auto flex flex-col md:p-20 p-10 shadow-lg h-4/6 mt-10 mb-40"
        style={{ backgroundColor: "#E0D6D4", fontFamily: "Rubik, sans-serif" }}
      >
        <button
          className="font-bold text-center hover:underline"
          onClick={() => navigate(`/${user._id}`)}
        >
          {user.fullName}
        </button>
        <h1 className="text-center text-6xl">{post.title}</h1>
        <p className="text-center my-5">{post.description}</p>
        <img
          src={`../upload/${post.img}`}
          alt="dish"
          style={{
            width: "70%",
            height: "40%",
            margin: "auto",
            boxShadow: "5px 5px 15px 5px white",
          }}
        />
        <h3 className="font-bold mt-10 text-2xl text-center underline">
          מצרכים{" "}
        </h3>
        <div className="text-center my-10">
          {recipe.map((ingredient, i) => (
            <p className="my-2" key={i}>
              {ingredient}
            </p>
          ))}
        </div>
        <h3 className="font-bold my-10 text-2xl text-center underline">
          אופן הכנה{" "}
        </h3>
        <p className="text-right mb-4">
          <span className="font-bold">זמן הכנה </span>
          {post.time}
        </p>
        <div className=" m-auto text-right w-full text-lg">
          {post.preparation}
        </div>
        <p className="text-6xl text-center my-10">!בתיאבון</p>
      </div>
      <div className="w-3/4 m-auto my-20">
        <button
          onClick={() => addComment()}
          className="text-lg hover:text-pink-400"
        >
          להוספת תגובה +
        </button>
      </div>
      <div style={{ display: `${alert}` }}>
        <div
          className="flex md:w-2/4 w-full m-auto p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>עלייך להירשם / להתחבר כדי להגיב</div>
        </div>
      </div>
      <div style={{ display: `${comment}` }}>
        <CommentInput userId={userId} postId={id} />
      </div>
      <CommentsSection postId={id} />
    </div>
  );
}
