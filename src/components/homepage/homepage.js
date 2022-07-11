import React, { useState } from "react";
import "./homepage.css";
import Navbar from "../../Navbar";
import { Users } from "../../Users";

const Homepage = ({ setLoginUser }) => {
  const [query, setquery] = useState("");

  const searhchange = (e) => {
    setquery(e.target.value);
  };

  return (
    <>
      <Navbar query={query} setquery={searhchange} />
      <div className="homepage">
        Homepage
        <div className="button" onClick={() => setLoginUser({})}>
          Logout
        </div>
      </div>

      <div className="cards">
        {Users.filter((Users) => Users.name.toLowerCase().includes(query)).map(
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

export default Homepage;
