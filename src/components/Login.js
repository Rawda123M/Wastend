import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email !== "" && password !== "") {
      console.log(email);
      console.log(password);
      navigate(`/${email}/get-started`);
    } else {
      alert("Check Email And Password");
    }
  }
  return (
    <div className="login-main">
      <div className="left">
        <h2 className="logo">Wastend</h2>
        <h2 className="text">LOG IN TO MYSTORE</h2>
      </div>
      <div className="right">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2 className="heading">Log in to your account</h2>
          <input type="email" id="email" placeholder="Enter your email" />
          <input type="password" id="password" placeholder="Enter Password" />
          <input type="submit" value={"LOG IN"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
