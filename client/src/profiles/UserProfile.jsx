import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import RecipeCard from "../components/RecipeCard";
import { getUser } from "../utils";


export default function UserProfile() {
  const [usersPosts, setUsersPosts] = useState([]);
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getUsersPosts = async () => {
    const { data } = await axios.get(
      `https://tame-lime-haddock-robe.cyclic.app/posts?userId=${id}`
    );
    setUsersPosts(data);
  };

  useEffect(() => {
    getUsersPosts();
    getUser(id,setUser)
  }, []);

  return (
    <div>
      <div className="w-full p-2" style={{ backgroundColor: "#E0D6D4",fontFamily:'Lobster'}}>
        <h1 className="text-center font-bold text-5xl">{user.fullName}</h1>
      </div>
      <div className="m-auto flex flex-wrap justify-around w-full mt-20">
        {usersPosts.map((post) => (
          <div key={post._id}>
          <RecipeCard recipe={post}/>
          </div>
        ))}
      </div>
    </div>
  );
}
