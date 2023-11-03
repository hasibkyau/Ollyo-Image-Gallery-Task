import React from "react";
import Photos from "../../components/Photos/Photos";
import "./gallery.scss";

const Gallery = () => {
    document.title = "Home";
    return (
      <div class="main-container">
        <Photos/>
      </div>
    );
}

export default Gallery;