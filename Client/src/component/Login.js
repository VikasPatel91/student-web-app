import React from "react";
import { login } from "../service/UserService.js";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const HandleForm = async (e) => {
    e.preventDefault();
    let res = await login(data);
    if (res.status === 200) {
      alert("Login successfull");
      res = await res.data;
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", JSON.stringify(res.auth));

      navigate("/");
    } else {
      console.log("login failed");
    }
  };

  return (
    <div className="login-container">
      <form action="" className="login-main" onSubmit={HandleForm}>
        <h2 className="login-heading">Login</h2>
        <br />
        <input
          type="email"
          name="email"
          id="login-email"
          className="login-form"
          placeholder="Enter Email ID"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <br />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="login-password"
          className="login-form"
          placeholder="Enter Password"
          onChange={async (e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <br />
        <br />
        <br />
        <input type="submit" id="login-btn" value="Login" />
      </form>
    </div>
  );
};

export default Login;
