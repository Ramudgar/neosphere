import React from "react";
import "../../css/nav.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <li className="nav-item">
                <Link className="nav-link" to="/addProduct" aria-disabled="true">
                  Add Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" aria-disabled="true">
                  View Products
                </Link>
              </li>
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
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
