import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./gallery.css";

const finalSpaceCharacters = [
  {
    id: "1",
    name: "product",
    thumb: "/images/image-1.webp",
  },
  {
    id: "2",
    name: "product",
    thumb: "/images/image-2.webp",
  },
  {
    id: "3",
    name: "product",
    thumb: "/images/image-3.webp",
  },
  {
    id: "4",
    name: "product",
    thumb: "/images/image-4.webp",
  },
  {
    id: "5",
    name: "product",
    thumb: "/images/image-5.webp",
  },
  {
    id: "6",
    name: "product",
    thumb: "/images/image-6.webp",
  },
  {
    id: "7",
    name: "product",
    thumb: "/images/image-7.webp",
  },
  {
    id: "8",
    name: "product",
    thumb: "/images/image-8.webp",
  },
  {
    id: "9",
    name: "product",
    thumb: "/images/image-9.webp",
  },
  {
    id: "10",
    name: "product",
    thumb: "/images/image-10.jpeg",
  },
  {
    id: "11",
    name: "product",
    thumb: "/images/image-11.jpeg",
  },
  {
    id: "12",
    name: "product",
    thumb: "/images/image-12.png",
  },
];

function Gallery() {
  const [products, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log("Update items:", items);

    updateCharacters(items);
  }

  return (
    <div className="Gallery">
      <header className="Gallery-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="products">
            {(provided) => (
              <ul
                className="products"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {products.map(({ id, name, thumb }, index) => {
                  if (id != 12) {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={"item-" + index}
                          >
                            <div className="products-thumb items">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                          </li>
                        )}
                      </Draggable>
                    );
                  } else {
                    return (
                      <li>
                        <div className="products-thumb items">
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                      </li>
                    );
                  }
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from{" "}
        <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default Gallery;
