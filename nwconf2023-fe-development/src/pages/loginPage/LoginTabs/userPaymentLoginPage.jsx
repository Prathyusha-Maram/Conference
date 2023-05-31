import React, { useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../../constant/constant";
import { useNavigate, NavLink } from "react-router-dom";
const UserLoginPage = () => {
  function userlogin() {
    axios
      .post(`${API_ENDPOINT}/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then(
        (response) => {
          localStorage.setItem("Usertoken", response.data.token);
          if (response.data.status === true) {
            navigate("/checkStatus");
          } else {
            setloginalert(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const [loginEmail, setloginUpEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [loginalert, setloginalert] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="login-page-container" >
      <div className="login-con" style={{ textAlign: "center"}}>
        <h2>Author Login</h2>
        <div className="login-input-con">
        <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setloginUpEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setloginPassword(e.target.value)}
          />
          {loginalert ? (
            <strong style={{ color: "red" }}>Wrong Details</strong>
          ) : (
            ""
          )}
          <button onClick={userlogin} >Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
