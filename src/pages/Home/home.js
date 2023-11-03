import React from "react";
import Gallery from "../gallery/gallery";

const Home = () => {
  document.title = "Home";
  return (
    <div class="main-container">
      <Gallery/>
    </div>
  );
};

export default Home;
