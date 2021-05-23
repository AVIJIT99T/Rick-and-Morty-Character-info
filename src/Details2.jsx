import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import Character from "./Character";
import "./details.css";

const Details2 = () => {
  // console.log(props);
  const { id } = useParams();

  const [value, setValue] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + { id })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setValue(result);
      });
  }, []);

  return (
    <>
      <div className="main">
        <div className="card p-3 shadow">
          {/* <div className="upper-container">
            <div className="image-container">
              <img
                src={props.location.state.imgsrc}
                alt=""
                height="100px"
                width="100px"
              />
            </div>
          </div> */}
          {value != null && (
            <div className="lower-container">
              {/* <h3 className="heading">{abc.name}</h3> */}

              {/* <span className="heading" data-tip={props.location.state.gender}>
              <FaMale />
            </span> */}
              <h3 className="heading">{value.name}</h3>
              <h3 className="heading">{value.air_date}</h3>
              <h3 className="heading">{value.episode}</h3>

              <div className="card">
                <h2>List of Characters</h2>
                {value.characters.map((curr, index) => {
                  {
                    console.log(curr);
                  }
                  return (
                    <>
                      <ul>
                        <h2>Character: {index + 1}</h2>
                      </ul>
                    </>
                  );
                })}
              </div>

              {/*
            <span className="heading" data-tip={props.location.state.status}>
              <FaBookDead />
            </span>
            <ReactTooltip />
            <br />
            <div
              className="btn myBtn btn-outline-danger"
              data-tip="Scroll Down"
              data-place="bottom"
            >
              Episodes
            </div> */}
            </div>
          )}
        </div>
      </div>
      {/* <Character ch={value.characters} /> */}
    </>
  );
};

export default withRouter(Details2);

// const getValue = async () => {
//   try {
//   const response = await fetch(
//     "https://rickandmortyapi.com/api/episode/" + props.match.params.idx
//   );
//   const data = await response.json();
//   console.log(data);
//   setValue(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   getValue();
// }, []);
