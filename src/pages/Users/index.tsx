import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Grid } from "@mui/material";
import UserCard from "../../components/user";
import BreadCrums from "../../components/breadcrums";

import { getUsers, userListData } from "./slice";
import { useNavigate } from "react-router-dom";

import { updateCrums } from "../../components/breadcrums/slice";

function Users() {
  const list = useAppSelector(userListData);
  const dispatch = useAppDispatch();
  const nevigate = useNavigate();

  const loadUserList = async () => {
    await dispatch(getUsers());
  };

  useEffect(() => {
    dispatch(updateCrums({ type: "home", url: "/" }));
    loadUserList();
  }, []);

  const goToLink = (url: string) => {
    const data = {
      type: "user",
      url: url,
    };
    dispatch(updateCrums(data));
    nevigate(url);
  };
  return (
    <>
      <BreadCrums page={"home"} />
      <h2>Users : </h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {list.map((usr: any, i: number) => {
          return <UserCard goToLink={(url:string)=>{goToLink(url)}} key={`user_${i}`} user={usr} />;
        })}
      </Grid>
    </>
  );
}

export default Users;
