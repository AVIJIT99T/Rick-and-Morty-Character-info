import React from "react";
import { withRouter } from "react-router";
import "./details1.css";

const Details1 = (props) => {
  const ed = props.edetails;
  // console.log(ed);
  return (
    <>
      {/* <div className="container-fluid mt-5">
        <div className="row text-center">
          {ed.map((curr, index) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card1 p-2">
                  <h5 className="card-title">Episode: {index + 1}</h5>
                  <button className="btn3">Watch Now</button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
       */}

      <div className="card">
        <h2>List of Episodes</h2>
        {ed.map((curr, index) => {
          {
            console.log(curr);
            let name = "Avijit";
            console.log("hello," + name);
          }
          return (
            <>
              <ul>
                <h2>
                  Episode: {index + 1}
                  <button
                    className="btn3"
                    onClick={() => {
                      props.history.push({
                        pathname: "/episode/" + (index + 1),
                      });
                    }}
                  >
                    Watch Now
                  </button>
                </h2>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default withRouter(Details1);
