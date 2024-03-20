import React from "react";
import { NavLink } from "react-router-dom";
import Collage from "../images/clg.jpeg"
export default function PaymentLogin() {

  return (

    <>
      <div className="login-page-container">
        <div className="login-card">
          <div className="login-img">
            <img src={Collage} alt="" />
          </div>
          <div className="login-content"></div>
          <div className="loginRight">


           
            <div className="loginBtn author">
              <NavLink to="/userPaymentLogin">Continue as Author</NavLink>
            </div>
            <div className="loginBtn author">
              <NavLink to="/studentPaymentLogin">Continue as Student</NavLink>
            </div>
            





          </div>
        </div>


      </div>
    </>
  );
}
