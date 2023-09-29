import axios from "axios";
import React, { useState } from "react";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/users/login", data)
      .then((response) => {
        console.log(response.data);

        alert(`success: ${response.data.msg}`);
        setTimeout(() => {
          // Store the token in the localstorage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userData", JSON.stringify(response.data)); // Store the user data localstorage

          // Redirect to login after 1 seconds
          console.log(response.data.token);
        //   window.location.href = "/productform";

        }, 1000);
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // Extract the error message from the response data
          const errorMessage = err.response.data[0];
          alert(`Error: ${errorMessage}`);
        } else {
          // Error occurred before the request was made or no response was received
          alert("Sorry, something went wrong");
          console.log(err);
        }
      });
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
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
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginComponent;
