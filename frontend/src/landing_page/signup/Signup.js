import React from "react";

function Signup() {
  return (
    <div className="container" id="signup">
      <div className="row p-5">
        <div className="col-6">
          <img
            className="mt-5 p-5"
            src="media/images/signup.png"
            style={{ width: "115%", marginLeft: "50px" }}
          />
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
          <h2 className="mt-5 pt-4">Signup Now</h2>
          <p>Or track your existing application.</p>
          <input placeholder="mobile number"></input>
          <p className="mt-4" style={{ fontSize: "12px" }}>
            You will receive an OTP on your number
          </p>
          <button className="btn btn-primary" style={{ width: "150px" }}>
            Continue
          </button>
          <p className="mt-3" style={{ fontSize: "12px" }}>
            <a style={{ textDecoration: "none" }} href="">
              Want to open an NRI account?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;