import React from "react";
import "./gallery.scss";

const Gallery = () => {
  document.title = "Home";

 const draggables = document.querySelectorAll('.draggable');
 const containers = document.querySelectorAll('.container');

 console.log(draggables);

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
   container.addEventListener("dragover", (e) => {
      e.preventDefault();
     const afterElement = getDragAfterElement(container, e.clientY);
     const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
       container.appendChild(draggable);
      } else {
       container.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(container, y) {
   const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
       const box = child.getBoundingClientRect();
       const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  return (
    <div className="gallery">
      {/* <Photos/> */}
      <div className="container">
        <div className="draggable item-1"></div>
        <div className="draggable item-2"></div>
        <div className="draggable item-3"></div>
        <div className="draggable item-4"></div>

        <div className="draggable item-5"></div>
        <div className="draggable item-6"></div>
        <div className="draggable item-7"></div>
        <div className="draggable item-8"></div>

        <div className="draggable item-9"></div>
        <div className="draggable item-10"></div>
        <div className="draggable item-11"></div>
        <div className="draggable item-12"></div>
      </div>

      <div className="container">
        <div className="draggable item-1"></div>
        <div className="draggable item-2"></div>
        <div className="draggable item-3"></div>
        <div className="draggable item-4"></div>

        <div className="draggable item-5"></div>
        <div className="draggable item-6"></div>
        <div className="draggable item-7"></div>
        <div className="draggable item-8"></div>

        <div className="draggable item-9"></div>
        <div className="draggable item-10"></div>
        <div className="draggable item-11"></div>
        <div className="draggable item-12"></div>
      </div>
    </div>
  );
};

export default Gallery;
