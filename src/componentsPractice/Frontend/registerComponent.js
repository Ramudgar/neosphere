import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterComponent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:5000/user/signup",
        data
      );
      console.log(response);
      alert(`Success: ${response.data.msg}`);

      // setTimeout(() => {
      //   // Redirect to login after 1 second
      //   window.location.href = "/login";
      // }, 1000);

      navigate("/login");
    } catch (error) {
      console.log(error.response ? error.response.data.msg : "Server error");
      alert(
        `Error: ${error.response ? error.response.data.msg : "Server error"}`
      );
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            {/* <h1>{email}</h1> */}
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="inputText">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            {/* <p>{password}</p> */}
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterComponent;
