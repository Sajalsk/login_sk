import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
// import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Cards from "./Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Users } from "./Users";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Sajal from "./components/login/sajal";

function App() {
  const [user, setLoginUser] = useState({});
  const [signedin, setsignedin] = useState(true);

  const [query, setquery] = useState("");

  const searhchange = (e) => {
    // console.log(e.target.value)
    setquery(e);
  };


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setsignedin(true);
    }

    setsignedin(false);
  });

  if (signedin === true) {
    return (
      <>
        <div className="App">
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  user && user._id ? (
                    <div>
                      <Navbar query={query} searhchange={searhchange} />
                      <Cards query={query} setLoginUser={setLoginUser} element={<Cards />} />
                    </div>
                  ) : (
                    // <Homepage  path="/Homepage"  setLoginUser={setLoginUser} element={<Homepage />}/>
                    <Login setLoginUser={setLoginUser} />
                  )
                }
              ></Route>
              <Route
                path="/login"
                element={<Login setLoginUser={setLoginUser} />}
              />
              <Route path="/register" element={<Register />} />
              {/* <Navbar query={query} setquery={searhchange} element={<Navbar />} /> */}
              <Route path="/Sajal" element={<Cards />} />

            </Routes>
          </Router>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="App">
          <Router>
            <Routes>
              <Route
                path="/login"
                element={<Login setLoginUser={setLoginUser} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/sajal" element={<Sajal />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
