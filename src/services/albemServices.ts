import axios from "axios";

export const getUserAlbumList = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  return res.data;
};
