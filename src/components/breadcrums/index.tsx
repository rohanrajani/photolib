import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { breadCrumsData, updateCrums } from "../../components/breadcrums/slice";

function BreadCrums(props: any) {
  const nevigate = useNavigate();
  const dispatch = useAppDispatch();
  const bcData = useAppSelector(breadCrumsData);

  const goToLink = (type: string, url: string | null) => {
    const data = {
      type: type,
      url: url,
    };
    dispatch(updateCrums(data));
    if (url) {
      nevigate(url);
    }
  };
  return (
    <>
      {props.page === "home" && null}
      {props.page === "user" && (
        <div>
          {" "}
          <span
            onClick={() => {
              goToLink("home", "/");
            }}
          >
            Home
          </span>{" "}
          / <b>User</b>{" "}
        </div>
      )}
      {props.page === "album" && (
        <div>
          {" "}
          <span
            onClick={() => {
              goToLink("home", "/");
            }}
          >
            Home
          </span>{" "}
          /{" "}
          <span
            onClick={() => {
              goToLink("user", bcData.user);
            }}
          >
            User
          </span>{" "}
          / <b>Album</b>{" "}
        </div>
      )}
    </>
  );
}
export default BreadCrums;
