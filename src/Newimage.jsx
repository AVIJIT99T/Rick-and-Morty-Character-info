import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";

const Newimage = (props) => {
  const currValue = props.char;
  console.log(currValue[0].substring(42));

  //   const [img, setImg] = useState([]);

  //   const getImages = async () => {
  //     try {
  //       const result = await axios.get(
  //         "https://rickandmortyapi.com/api/character/" + getImage
  //       );
  //       console.log(result.data);
  //       setImg(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getImages();
  //   }, []);

  return (
    <>
      <h1>Avijit</h1>
    </>
  );
};

export default withRouter(Newimage);
