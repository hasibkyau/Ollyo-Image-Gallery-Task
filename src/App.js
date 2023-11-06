import "./App.css";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div className="App">
        <Gallery/>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { useDrag, useDrop } from "react-dnd";
// import './App.css';

// import galleryList from "./data.js";



// const Card = ({ src, title, id, index, moveImage, handleCallback }) => {
//   const ref = React.useRef(null);
//   const checkboxRef = React.useRef(null);

//   const [, drop] = useDrop({
//     accept: "image",
//     hover: (item, monitor) => {
//       if (!ref.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) {
//         return;
//       }

//       const hoverBoundingRect = ref.current?.getBoundingClientRect();

//       const hoverMiddleY =
//         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

//       const clientOffset = monitor.getClientOffset();
//       const hoverClientY = clientOffset.y - hoverBoundingRect.top;

//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//         return;
//       }

//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//         return;
//       }

//       moveImage(dragIndex, hoverIndex);

//       item.index = hoverIndex;
//     },
//   });

//   const [{ isDragging }, drag] = useDrag({
//     type: "image",
//     item: () => {
//       return { id, index };
//     },
//     collect: (monitor) => {
//       return {
//         isDragging: monitor.isDragging(),
//       };
//     },
//   });

//   const opacity = isDragging ? 0 : 1;
//   drag(drop(ref));

//   // const isChecked = checkboxRef.current?.checked;
//   // console.log(isChecked);

//   return (
//     <div ref={ref} style={{ opacity }} className={"item item-" + index}>
//       <input
//         ref={checkboxRef}
//         className="checkbox"
//         type="checkbox"
//         onChange={handleCallback}
//       />
//       <img src={src} alt={title} />
//     </div>
//   );
// };

// const App = () => {

//   const [Count, setCount] = useState(0);   
//   const [images, setImages] = React.useState(galleryList);

//   const moveImage = React.useCallback((dragIndex, hoverIndex) => {
//     setImages((prevCards) => {
//       const clonedCards = [...prevCards];
//       const removedItem = clonedCards.splice(dragIndex, 1)[0];

//       clonedCards.splice(hoverIndex, 0, removedItem);
//       return clonedCards;
//     });
//   }, []);

//   // Callback function to handle data received from the
//   const handleCallback = (childData) => {
//     let value = childData.target.checked;
//     if (value) {
//       setCount(Count + 1);
//       childData.target.className = "active";
//     } else {
//       if (Count > 0) {
//         setCount(Count - 1);
//         childData.target.className = "checkbox";
//       }
//     }
//     console.log("Total Image:", Count);
//   };

//   return (
//     <main>
//       <div className="container">
//         <div className="top-left-bar">
//           <p>{Count ? Count + " File Selected" : "Gallery"}</p>
//         </div>
//         <div className="top-right-bar">
//           <p>{Count ? "Delete files" : ""}</p>
//         </div>
//         {React.Children.toArray(
//           images.map((image, index) => (
//             <Card
//               className="card"
//               src={image.img}
//               title={image.title}
//               id={image.id}
//               index={index}
//               moveImage={moveImage}
//               handleCallback={handleCallback}
//             />
//           ))
//         )}
//         <div className="add-images">
//           <img src="/images/image-12.png" alt="add more" />
//           <p>Add Images</p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default App;
