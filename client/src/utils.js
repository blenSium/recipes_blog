import axios from "axios";

export const getUser = async (userId, set) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/users/${userId}`);
    set(data);
  };

