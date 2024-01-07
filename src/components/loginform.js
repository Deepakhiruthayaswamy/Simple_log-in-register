import React, { useState } from "react";
import "./loginform.css";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popUp = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="USERNAME" />
      <input type="password" placeholder="PASSWORD" />

      <div className="btnstyle" onClick={popUp}>
        Login
      </div>
      <div className={popupStyle}>
        <h3> Login Successfull </h3>
        <p> Username and Password correct </p>
      </div>
    </div>
  );
};

export default LoginForm;
