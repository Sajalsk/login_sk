import React from "react";
import { useState } from "react";

const Form = () => {
  const initialValues = {
    username: "",
    email: "",
    Phone: "",
    website: "",
    descrip: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [, setIsSubmit] = useState(false);
  // const [showDetails, setShowDetails] = useState(false)

  // const [username, setUsername] = useState("");
  // const [descrip, setdescrip] = useState("");
  // const [email, setEmail] = useState("");
  // const [list, setlist] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // setUsername(e.target.value);
    // setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setIsSubmit(true);
    console.log("Submitted");
    console.log(formValues);
    // setShowDetails(true)
    document.getElementsByName("username").value="";
    document.getElementsByName("email").value="";
    document.getElementsByName("phone").value="";
    document.getElementsByName("website").value="";
    document.getElementsByName("descrip").value="";
    // const data = { username, email };
    // if (username && email) {
    //   setlist((ls) => [...ls, data]);
    // }
  };

  // JSON

  // let movies = [];
  // // example {id:1592304983049, title: 'Deadpool', year: 2015}
  // const submit = (ev)=>{
  //     ev.preventDefault();  //to stop the form submitting
  //     let movie = {
  //         id: data.now(),
  //         username: document.getElementById('username').value,
  //         email: document.getElementById('email').value,
  //         phone: document.getElementById('phone').value,
  //         website: document.getElementById('website').value,
  //         descrip: document.getElementById('descrip').value
  //     }
  //     movies.push(movie);
  //     document.forms[0].reset(); // to clear the form for the next entries
  //     //document.querySelector('form').reset();

  //     //for display purposes only
  //     console.warn('added' , {movies} );
  //     let pre = document.querySelector('#msg pre');
  //     pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

  //     //saving to localStorage
  //     localStorage.setItem('MyMovieList', JSON.stringify(movies) );
  // }
  // document.addEventListener('DOMContentLoaded', ()=>{
  //     document.getElementById('btn').addEventListener('click', submit);
  // });

  // JSON

  return (
    <>
      <div className="p-5 bg-dark text-white">
        <div style={{ marginLeft: "410px" }}>
          <h1>Colorlib Contact form</h1>
        </div>
        <h6 style={{ marginLeft: "410px" }}>Contact us for custom quote</h6>
        <div className="d-fex justify-content-center">
          {/* // FORM  */}

          <form
            onSubmit={handleSubmit}
            id="form"
            style={{ maxWidth: "600px", marginLeft: "400px" }}
          >
            <div className="form-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                value={formValues.username}
                onChange={handleChange}
                className="form-control"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                placeholder="Your Email address"
                value={formValues.email}
                onChange={handleChange}
                className="form-control"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <div className="form-group">
              <label htmlFor="Phone"></label>
              <input
                type="tel"
                name="Phone"
                placeholder="Your Phone Number (optional)"
                value={formValues.Phone}
                onChange={handleChange}
                className="form-control"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <div className="form-group">
              <label htmlFor="website"></label>
              <input
                type="text"
                className="form-control"
                name="website"
                value={formValues.website}
                onChange={handleChange}
                placeholder="Your Website (optional)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="descrip"></label>
              <input
                type="text"
                className="form-control"
                style={{ height: "100px" }}
                name="descrip"
                value={formValues.descrip}
                onChange={handleChange}
                aria-describedby="emailHelp"
                placeholder="Type your message here"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>

            <button
              id="btn"
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: "230px" }}
            >
              Submit
            </button>

            <p style={{ marginLeft: "180px", padding: "25px" }}>
              Design by <a href="/">Colorlib</a>
            </p>
          </form>
        </div>
        {/* {showDetails && <div>
        {JSON.stringify(formValues)}</div>} */}
      </div>
      

      {/* {list.map((a) => (
        <div>
          <li key="{username}">{a.username}</li>
          <li key="{email}">{a.email}</li>
        </div>
      ))} */}
    </>
  );
};

export default Form;
