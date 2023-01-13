import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Grid } from "@mui/material";
import BreadCrums from "../../components/Breadcrums";
import { useParams } from "react-router-dom";
import { updateCrums } from "../../redux/slice/BreadCrumbsSlice";
import { useNavigate } from "react-router-dom";

import AlbumCard from "../../components/Album/Album";

import { getUserAlbums } from "../../redux/slice/AlbumSlice";

function Albums() {
  const { id } = useParams();
  const [albList, setAlbList] = useState([]);
  const dispatch = useAppDispatch();
  const nevigate = useNavigate();
  
  const goToLink = (url:string) => {
    const data = {
      type:'album',
      url: url
    }
    dispatch(updateCrums(data))
    nevigate(url)
  }
  const loadUserList = async () => {
    const data = await dispatch(getUserAlbums(id));
    setAlbList(data.payload);
  };

  useEffect(() => {
    loadUserList();
  }, []);

  return (
    <>
      <BreadCrums page="user" />
      <h2>Albums : </h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {albList.map((alb: any, i: number) => {
          return <AlbumCard goToLink={(url:string)=>{goToLink(url)}} key={`album_${i}`} album={alb} />;
        })}
      </Grid>
    </>
  );
}

export default Albums;
