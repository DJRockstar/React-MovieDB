import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/movies">
        Vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/movies">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/customers">
              Customers
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/rentals">
              Rentals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
