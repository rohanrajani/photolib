import React from "react";
import Header from "./components/header";
import RootRouter from "./routers";
import { Container } from "@mui/system";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl" style={{ padding: "2rem" }}>
        <RootRouter />
      </Container>
    </div>
  );
}

export default App;
