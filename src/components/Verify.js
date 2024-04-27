import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber,} from 'firebase/auth'


const Verify = () => {

  const [src, setSrc] = useState("https://miro.medium.com/max/400/1*rmcCGvWTSmPLeRrSEiDMGw.png");
  const [isClicked, setIsClicked] = useState(false);
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    await authEngine();
    setSrc("https://as1.ftcdn.net/v2/jpg/05/20/64/92/1000_F_520649296_C25HWe6PzZrBDb2Z2vUrwRZnakhsMlmn.jpg");
    document.getElementById("mobile").value = "";
    setIsClicked(true);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeOTP = (e) => {
    setOtp(e.target.value);
  };

  const handleClick2 = async () => {
    const code = otp;

    window.confirmationResult
      .confirm(code)
      .then((result) => {
        document.getElementById("otp").value = "";
        console.log("Success login");
        navigate("/Form");
      })
      .catch((error) => {
        console.log(error);
        alert("Please enter a valid OTP");
      });
  };

  const handleClick3 = () => {
    alert("OTP has been resent");
  };

  useEffect(() => {
    const tempEngine = async () => {
      const firebaseConfig = {
        apiKey: "AIzaSyCQcmTfHxXlHKA2AGzRIyO652M2ESOw5a4",
        authDomain: "verify-7159d.firebaseapp.com",
        projectId: "verify-7159d",
        storageBucket: "verify-7159d.appspot.com",
        messagingSenderId: "553469772002",
        appId: "1:553469772002:web:25f36571a344f92de65ebb",
        measurementId: "G-6JQ9ZVBPFH"
      };
      const app = initializeApp(firebaseConfig);
      setFirebaseApp(app);
    };
    tempEngine();
  }, []);

  const authEngine = async () => {
    if (firebaseApp) {
      const auth = getAuth();
      auth.languageCode = "en";
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            onSignInSubmit();
          },
        },
        auth
      );
      onSignInSubmit();
    } else {
      console.log("Firebase app is not initialized");
    }
  };

  const onSignInSubmit = async () => {

    if (phoneNumber) {
      const appVerifier = window.recaptchaVerifier;
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent to your Number");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Phone number is required");
    }
  };

  return (
    
    <>
    {/* Image */}
      <div className="text-center">
        <img
          className="header-logo mb-4"
          style={{ height: "300px", marginTop: "100px" }}
          src={src}
          alt="Logo"
        />
      </div>

          {/* H1 */}
      <div className="text-center">
        <h1>Verification</h1>
      </div>

      <div>
        {!isClicked ? (
          <>
             {/* para */}
            <div className="text-center" id="para">
              <p>
                We will send you a One Time Code on your phone number
                <br /> 
                Please Enter your Country code also
              </p>
            </div>
              
            {/* Input */}
            <div className="text-center func">
              <input
                id="mobile"
                placeholder="Enter Phone Number"
                onChange={handleChangePhoneNumber}
              />
            </div>

            {/* Get OTP */}
            <div id="btn">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  marginTop: "20px",
                  marginBottom: "40px",
                  marginLeft: "716px",
                }}
                onClick={handleClick}
                id="sign-in-button"
              >
                Get OTP
              </button>
            </div>

          </>
        ) : (
          <>
                {/* para */}
            <div className="text-center" id="para">
              <p>You will receive an OTP via SMS</p>
            </div>

            {/* input */}
            <div className="text-center func">
              <input
                id="otp"
                placeholder="Enter OTP"
                onChange={handleChangeOTP}
              />
            </div>
              
              {/* Submit OTP */}
            <div id="btn">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  marginTop: "20px",
                  marginBottom: "40px",
                  marginLeft: "720px",
                }}
                onClick={handleClick2}
              >
                Verify
              </button>
            </div>

            {/* Resend OTP? */}
            <div className="text-center">
              Didn't receive the verification OTP?{" "}
              <p onClick={handleClick3} style={{ cursor: "pointer" }}>
                Resend
              </p>
            </div>

          </>
        )}

      </div>
    </>
  );
};

export default Verify;
