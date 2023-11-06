import React from "react";
import { useDrag, useDrop } from "react-dnd";
import "./card.css";

const Card = ({ src, title, id, index, moveImage, handleCallback }) => {
  //Referencing element
  const ref = React.useRef(null);
  const checkboxRef = React.useRef(null);

  //Function for draging a card
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      //When draging posision and hover position same, image do not move
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      //image shouldn't move
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      //image shoudn't move
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      //Otherwise image should move
      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  // const isChecked = checkboxRef.current?.checked;
  // console.log(isChecked);

  return (
    <div ref={ref} style={{ opacity }} className={"card card-" + index}>
      <input
        ref={checkboxRef}
        className="deactive"
        type="checkbox"
        onChange={handleCallback}
      />
      <img src={src} alt={title} />
    </div>
  );
};

export default Card;