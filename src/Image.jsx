import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import "./image.css";

const Image = (props) => {
  const getImage = props.char;
  console.log(getImage);

  const [img, setImg] = useState([]);

  const getImages = async () => {
    try {
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/" + getImage
      );
      console.log(res.data);
      setImg(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {img != null && (
        <div className="container">
          <div className="col-md-4 mb-2">
            <div className="card p-3 shadow">
              <div className="upper-container">
                <div className="image-container">
                  <img src={img.image} alt="" height="100px" width="100px" />
                </div>
              </div>
              <div className="lower-container">
                {/* <span className="heading" data-tip={props.location.state.gender}>
              <FaMale />
            </span> */}

                <h3 className="heading">{img.name}</h3>
                <h3 className="heading">{img.species}</h3>
                <h3 className="heading">{img.gender}</h3>
                <h3 className="heading">{img.status}</h3>

                {/* <span className="heading" data-tip={props.location.state.status}>
              <FaBookDead />
            </span>
            <ReactTooltip />
            <br /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Image);

{
  /* <div className="container-fluid mt-5">
          <div className="row text-center">
            <div className="col-10 mt-5">
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img src={img.image} className="rounded" width="155" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
