// import React from "react";
import React, { useState } from "react";
import { Users } from "./Users";
import "./App.css";
import Navbar from "./Navbar";

const Cards = (props) => {

  // const [query, setquery] = useState("");

  // const searhchange = (e) => {
  //   setquery(e.target.value);
  // };

  return (
    <>
      {/* <Navbar query={query} setquery={searhchange}  /> */}
      <div className="cards">
        {Users.filter((Users) => Users.name.toLowerCase().includes(props.query)).map(
          (Users) => (
            <div key={Users.id}>
              <div className="items">
                <div className="name"> {Users.name}</div>
                <div className="image">
                  <img src={Users.url} alt="" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Cards;
