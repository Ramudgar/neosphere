import React, { useEffect, useState } from "react";
import "../../css/nav.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");
    const userdata = JSON.parse(userData);
    const isAdmin = userdata?.data?.role === "admin" || false;
    setIsAdmin(isAdmin);
    if (token) {
      setIsLoggedIn(true); // Set the isLoggedIn state to true if token exists
    } else {
      setIsLoggedIn(false); // Set the isLoggedIn state to false if token doesn't exist
    }
  }, []);

  // function for logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsLoggedIn(false); // Set the isLoggedIn state to false
    window.location.href = "/login"; // Redirect to the login page
  };

  const handleSearch = (e) => {
    e.preventDefault();

    window.location.href = `/search-product/${query}`;
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              className="d-flex ms-auto"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              {isLoggedIn && isAdmin ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/addProduct"
                    aria-disabled="true"
                  >
                    Add Products
                  </Link>
                </li>
              ) : null}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="viewProduct"
                  aria-disabled="true"
                >
                  View Products
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item btn btn-danger btn-sm">
                    <Link
                      className="nav-link   "
                      to="/"
                      aria-disabled="true"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item btn btn-primary btn-sm mx-2 ">
                    <Link
                      className="nav-link  "
                      to="/register"
                      aria-disabled="true"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item btn btn-danger  btn-sm mx-2 ">
                    <Link className="nav-link" to="/login" aria-disabled="true">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
