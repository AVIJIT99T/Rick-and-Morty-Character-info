import React, { useState, useEffect } from "react";
import "./app.css";
import { withRouter } from "react-router";
import { GoSearch } from "react-icons/fa";

const Pro = (props) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data.results);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }

    // const response = await fetch("https://rickandmortyapi.com/api/character")
    // const data = await response.json()
    // console.log(data.results)
  };

  // console.log(props);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users
            .filter((curElem) => {
              if (searchTerm == "") {
                return curElem;
              } else if (
                curElem.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return curElem;
              }
            })
            .map((curElem) => {
              return (
                <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img
                          src={curElem.image}
                          className="rounded"
                          width="155"
                        />
                      </div>
                      <div className="ml-3 w-100">
                        <div className="p-2 mt-2 bg-primary rounded d-flex justify-content-between text-white stats">
                          <div className="d-flex flex-column">
                            <h3 className="card_title"> {curElem.name} </h3>
                          </div>
                          <div className="d-flex flex-column">
                            <button
                              className="btn1"
                              onClick={() => {
                                props.history.push({
                                  pathname: "/details",
                                  state: {
                                    imgsrc: curElem.image,
                                    sname: curElem.name,
                                    gender: curElem.gender,
                                    species: curElem.species,
                                    loc: curElem.location.name,
                                    status: curElem.status,
                                    episode: curElem.episode,
                                  },
                                });
                              }}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default withRouter(Pro);
/*

*/
