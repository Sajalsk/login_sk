import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({searhchange}) => {
  const [value, setValue] = useState('')

  const handleValueChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
    searhchange(e.target.value)
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            RoboApp
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="search">
              <form className="form-inline my-2 my-lg-0 p-3">
                <input
                  className=" mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => handleValueChange(e)}
                />

                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Log out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
