import axios from "axios";

export const getUser = async (userId, set) => {
    const { data } = await axios.get(`https://nice-erin-cricket-boot.cyclic.app/users/${userId}`);
    set(data);
  };

