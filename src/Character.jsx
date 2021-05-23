import React from "react";
import { withRouter } from "react-router";

const Character = (props) => {
  const char = props.ch;
  return (
    <>
      <div className="card">
        <h2>List of Characters</h2>
        {char.map((curr, index) => {
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
    </>
  );
};

export default withRouter(Character);
