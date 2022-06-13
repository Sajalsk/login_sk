import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Button from "./Button";

// import Form from "./components/Form";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const Verify = () => {
  const [src, setsrc] = useState(
    "https://miro.medium.com/max/400/1*rmcCGvWTSmPLeRrSEiDMGw.png"
  );

  // document.getElementById("para").innerHTML="You will get otp via sms"
  
  const [isClicked, setIsclicked] = useState(false);
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const navigate = useNavigate();

  const handleclick = async () => {
    // alert("Clicked");
    await authEngine();
    setsrc(
      "https://www.efilecabinet.com/wp-content/uploads/2020/04/otp-icon.png"
    );
    document.getElementById("mobile").value="";
    setIsclicked(true);
    // alert("OTP has been sent")
  };

  //-->NEW

  const handleChange = async (e) => {
    console.log(e.target.value);
    setPhoneNumber(e.target.value);
    
  };

 

  useEffect(() => {
    const tempEngine = async () => {
      const firebaseConfig = {
        apiKey: "AIzaSyCgafm44TP_T8GSDVNy5aZRQFUzUdJJ0l4",
        authDomain: "otp-generator-91e8d.firebaseapp.com",
        projectId: "otp-generator-91e8d",
        storageBucket: "otp-generator-91e8d.appspot.com",
        messagingSenderId: "851259247148",
        appId: "1:851259247148:web:b71d8132e0ffa959f8df89",
        measurementId: "G-BD8QVLMNS2",
      };
      const app = initializeApp(firebaseConfig);
      setFirebaseApp(app);
    };
    tempEngine();
  }, []);

  const authEngine = async () => {
    if (firebaseApp) {
      // console.log("in here");
      const auth = getAuth();
      auth.languageCode = "en";
      console.log(auth);
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            // console.log("callback response");
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
          },
        },
        auth
      );
      onSignInSubmit();
      // console.log("done with recaptcha");
    } else {
      // console.log("not here");
    }
  };

  const onSignInSubmit = async () => {
    if (phoneNumber) {
      // console.log("number done");
      console.log(window.recaptchaVerifier);
      const appVerifier = window.recaptchaVerifier;
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          // console.log("done");
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent to your Number");
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log(error);
          // console.log("otp is Invalid");
          // ...
        });
    } else {
      // console.log("number not done");
    }
  };

  const handleclick2 = async () => {
    // alert("Clicked");
    const code = phoneNumber;
    // console.log("hey");
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        // const user = result.user;
        document.getElementsByName("otp").value="";
        console.log("Success login");
        navigate("/Form");

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
        alert("Please enter a valid otp ");
      });
  };


    //-->NEW

  const handleclick3=()=>{
    alert("OTP has been resent")
  }



  return (
    <>
      <div  className="text-center">
        <img
          className="header-logo mb-4"
          style={{ height: "300px", marginTop: "100px" }}
          src={src}
          alt="Zomato-logo"
        />
      </div>
      <div  className="text-center">
        <h1>Verification</h1>
      </div>
      <div>
       
       
        {!isClicked ? (
          <>
           <div  className="text-center" id="para">
           <p>
             we will send you One Time Code
             <br /> on your phone number
           </p>
         </div>

         <div  className="text-center func" >
          <input id="mobile" placeholder="  Enter Phone Number " onChange={handleChange} />
        </div>

          <div id="btn ">
            <button 
              type="button"
              className="btn btn-primary "

              style={{ marginTop: "20px", marginBottom: "40px", marginLeft:"716px" }}
              onClick={handleclick}
              id="sign-in-button"
            >
              Get OTP
            </button>
          </div>
          
         </>
        ) : (
          <>
          <div  className="text-center" id="para">
          <p>
           You will get a opt via sms
          </p>
        </div>

        <div  className="text-center func" >
         <input id="otp" placeholder="  Enter OTP " onChange={handleChange} />
       </div>
          <div id="btn">
            {/* <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "20px", marginBottom: "40px" , marginLeft:"720px"}}
              onClick={handleclick2}
            >
              Verify
            </button> */}
            <Button handleclick = {handleclick2}/>
          </div>

          <div className="text-center">
           Didn't received the verification otp? <p onClick={handleclick3} style={{cursor:"pointer"}} > Resend again  </p>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default Verify;
