import React, { useState } from "react";
import axios from "axios";

function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      // username: username,
      password: password,
    };
    axios.post("http://localhost:5000/users/register", data)
      .then((response) => {
        console.log(response);
        alert(`success: ${response.data.msg}`);

        setTimeout(() => {
          // Redirect to login after 1 seconds
          window.location.href = "/login";
        }, 1000);
      })
      .catch((err) => {
        alert(`Error: ${err.response.data.msg}`);
        console.log(err.response.data.msg);
      });
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
