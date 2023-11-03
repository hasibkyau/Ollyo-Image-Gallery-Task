import React, { Component } from "react";
import Photo from "./Photo";

class Photos extends Component {
  state = {
    selectedPhoto: null,
    modalOpen: false,
    category: "all",
    photos: null,
  };

  onPhotoSelect = (photo) => {
    // this.setState({
    //   selectedPhoto: photo,
    //   modalOpen: !this.state.modalOpen,
    // });
  };

  toggleModal = () => {
    // this.setState({
    //   modalOpen: !this.state.modalOpen,
    // });
  };

  handleCategory = (event, p) => {
    console.log("handle category");
  };

  componentDidMount() {
    console.log("Did Mount");
  }

  render() {
      if (this.state.category === "all") {
        return (
            <Photo/>
        );
      } 
      else {
          return (
          <Photo/>
          );
       }
    }
}
export default Photos;
