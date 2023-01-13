import axios from "axios";

export const getAlbumPhotoList = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  return res.data;
};
