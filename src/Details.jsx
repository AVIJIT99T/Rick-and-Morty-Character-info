import React from "react";
import { withRouter } from "react-router";
import "./details.css";
import { FaMale } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Details1 from "./Details1";

const Details = (props) => {
  console.log(props.location.state);
  return (
    <>
      {/* <button
            className="btn2"
            onClick={() => {
              props.history.push({
                pathname: "/details1",
                state: {
                  edetails: props.location.state.episode,
                },
              });
            }}
          ></button> */}

      <div className="main">
        <div className="card p-3 shadow">
          <div className="upper-container">
            <div className="image-container">
              <img
                src={props.location.state.imgsrc}
                alt=""
                height="100px"
                width="100px"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3 className="heading">{props.location.state.sname}</h3>

            <span className="heading" data-tip={props.location.state.gender}>
              <FaMale />
            </span>

            <h3 className="heading">{props.location.state.species}</h3>
            <h3 className="heading">{props.location.state.loc}</h3>

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
            </div>
          </div>
        </div>
      </div>
      <Details1 edetails={props.location.state.episode} />
    </>
  );
};

export default withRouter(Details);
