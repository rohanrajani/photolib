import axios from "axios";

export const getAllUsers = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
};
