import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container d-flex flex-column align-items-center">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center mb-3" to="/">
          <img
            src={logo}
            alt="Homepage"
            className="img-fluid"
            style={{ height: "30px" }}
          />
          <span className="ms-2 fw-bold">BrandName</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createblog">
                Add Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myblogs">
                My Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mt-2">
          <ul className="navbar-nav d-flex flex-row justify-content-center">
            <li className="nav-item me-3">
              <a
                className="nav-link text-dark"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link text-dark"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link text-dark"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
