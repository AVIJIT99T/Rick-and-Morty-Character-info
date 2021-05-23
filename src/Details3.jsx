import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";
import Image from "./Image";
import Newimage from "./Newimage";

const Details3 = () => {
  const { id } = useParams();

  const [value, setValue] = useState();

  //   console.log({ id });

  const getValue = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/episode/" + id
      );
      const data = await response.json();
      console.log(data);
      setValue(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  //   useEffect(() => {
  //     fetch("https://rickandmortyapi.com/api/episode/" + id)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //         setValue(result);
  //       });
  //   }, []);

  return (
    <>
      {value != null && (
        <div className="together">
          <div className="main">
            <div className="card p-3 shadow">
              <div className="lower-container">
                <h3 className="heading">{value.name}</h3>
                <h3 className="heading">{value.air_date}</h3>
                <h3 className="heading">{value.episode}</h3>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <h2>List of Characters</h2>
            {value.characters.map((curr, index) => {
              {
                console.log(curr);
              }
              return (
                <>
                  <ul>
                    <h2>Character: {curr.substring(42)}</h2>
                    
                  </ul>
                </>
              );
            })}
          </div> */}

          <div className="equal">
            {value.characters.map((curr, index) => {
              return (
                <>
                  <Image char={curr.substring(42)} />
                </>
              );
            })}
          </div>

          {/* <Newimage char={value.characters} /> */}
        </div>
      )}
    </>
  );
};

export default withRouter(Details3);
