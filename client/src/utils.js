import axios from "axios";
export const toBase64 = (file) =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export const getUser = async (userId, set) => {
    const { data } = await axios.get(`https://tame-lime-haddock-robe.cyclic.app/users/${userId}`);
    set(data);
  };

