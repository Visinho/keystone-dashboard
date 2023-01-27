import React from "react";
import { Home } from "./pages/";
import { Sidebar } from "./components";
import { Container } from "./layout";

const App = () => {
  return (
    <Home>
      <Sidebar />
      <Container />
    </Home>
  );
};

export default App;
