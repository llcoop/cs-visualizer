import React from "react";
import { Button } from "../../components/common";
import "./home-page.scss";

const Home = () => {
  return (
    <div id="home-page">
      <h1 className="title">👋Hello World👋</h1>
      <Button id="home-button" className="button">
        Test
      </Button>
    </div>
  );
};

export default Home;
