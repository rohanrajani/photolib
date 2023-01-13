import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import Albums from "../pages/Albums";
import Photos from "../pages/Photos";
import { Page } from "./types";

export const pages: Page[] = [
  { path: "/", comp: <Users /> },
  { path: "/user/:id", comp: <Albums /> },
  { path: "/album/:albumId", comp: <Photos /> },
];

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ comp, path }) => {
          return <Route key={path} path={path} element={comp} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
