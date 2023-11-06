import React, { useState } from "react";
import { galleryList } from "../../data.js";
import Card from "../card/card.js";
import "./gallery.css";

const Gallery = () => {
  const [Count, setCount] = useState(0);
  const [images, setImages] = React.useState(galleryList);

  //Function for moving image by reordering the index
  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      //exchanging the index
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  // Callback function to handle data received from the Card Component
  const handleCallback = (childData) => {
    //Count total selected images
    let value = childData.target.checked;
    if (value) {
      setCount(Count + 1);
      //if there is one or more than one image is selected, the checkbox will be visible
      childData.target.className = "active";
    } else {
      if (Count > 0) {
        setCount(Count - 1);
        //if there is no image select the checkbox class will hide the checkbox
        childData.target.className = "deactive";
      }
    }
  };

  return (
    <main className="main-container">
      <div className="submain-container">
        <div className="top-left-bar">
          <p>{Count ? Count + " File Selected" : "Gallery"}</p>
        </div>
        <div className="top-right-bar">
          <p>{Count ? "Delete files" : ""}</p>
        </div>
        {React.Children.toArray(
          images.map((image, index) => (
            <Card
              className="card"
              src={image.img}
              title={image.title}
              id={image.id}
              index={index}
              moveImage={moveImage}
              handleCallback={handleCallback}
            />
          ))
        )}
        <div className="bottom-card">
          <img src="/images/image-12.png" alt="add more" />
          <p>Add Images</p>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
