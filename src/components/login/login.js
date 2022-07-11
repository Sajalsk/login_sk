import React, { useState } from "react";
import firebase from "../../firebase";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Sajal from "./sajal";
// import Cards from "../../Cards";


const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signingoogle =  () => {
   
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        navigate("/")
        // setLoginUser()
        console.log('hehehehe', res)
      })

      .then((err) => {
        console.log(err);
      });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      // alert("Posted")
      axios.post("http://localhost:9002/login", user).then((res) => {
        console.log(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <>
      <div className="login">
        {/* {console.log(user)} */}
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.name}
          onChange={handlechange}
          placeholder="Enter your email id"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handlechange}
          placeholder="Enter your password"
        />
        <div className="button" onClick={login}>
          Login
        </div>
        <div style={{ marginTop: "10px", marginLeft: "-200px" }}>
          {" "}
          <button onClick={signingoogle}>Login with Google</button>
        </div>
        <div>or</div>
        {/* <div></div> */}
        <div className="button" onClick={() => navigate("/register")}>
          Resgister5
        </div>
      </div>
    </>
  );
};

export default Login;
