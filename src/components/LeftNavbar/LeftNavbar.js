import React from "react";
import { Link } from "react-router-dom";

export default function LeftNavbar() {
  return (
    <div className="d-flex">
      <div>
        <Link className="btn border-0 btn-outline-light rounded-circle " to="/">
          <i class="bi bi-quora fs-2 text-primary"></i>
        </Link>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-secondary border-0 fs-5">
                <i class="bi bi-house-heart-fill me-2"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-secondary border-0 fs-5">
                <i class="bi bi-search me-2"></i>Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-secondary border-0 fs-5">
                <i class="bi bi-bell-fill me-2"></i>Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-secondary border-0 fs-5">
                <i class="bi bi-envelope-fill me-2"></i>Message
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-secondary border-0 fs-5">
                <i class="bi bi-person-fill me-2"></i>Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex ms-auto p-0" style={{height: "100vh"}}>
        <div class="vr"></div>
      </div>
    </div>
  );
}
