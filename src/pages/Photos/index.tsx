import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/breadcrums";
import PhotoCard from "../../components/photo";
import PhotoModel from "../../components/photoModel";

import { getAlbumPhotos } from "./slice";

function Albums() {
  const { albumId } = useParams();
  const [photoList, setPhotoList] = useState([]);
  const [detailImg, setImg] = useState({});
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (img: string) => {
    setImg(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const loadUserList = async () => {
    const data = await dispatch(getAlbumPhotos(albumId));
    setPhotoList(data.payload);
  };

  useEffect(() => {
    loadUserList();
  }, []);

  return (
    <>
      <BreadCrums page={"album"} />
      <h2>Photo Gallery : </h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {photoList.map((img: any, i: number) => {
          return (
            <PhotoCard
              handleOpen={(img: any) => {
                handleOpen(img);
              }}
              key={`photo_${i}`}
              photo={img}
            />
          );
        })}
      </Grid>
      <PhotoModel
        open={open}
        img={detailImg}
        handleClose={() => {
          handleClose();
        }}
      />
    </>
  );
}

export default Albums;