import { NavLink, useLocation } from "react-router-dom";
import '../Styles/Header.css';
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const navigate = useLocation();
  const [isActive, setisActive] = useState(false);
  function handleActive() {
    setisActive(!isActive)
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  " >
      <div className="container-fluid">

        <NavHashLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/static/image/logo.png"
            alt="Logo"
            width={60}
            height="auto"
            className="me-2"
          />
          <span className="brand-text text-success">Agriculture</span>
        </NavHashLink>

        <button onClick={handleActive}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {isActive ?

            <i class="bi bi-x"></i> :
            <span className="navbar-toggler-icon"></span>
          }

        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavHashLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink
                to="/aboutus"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About Us
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink
                to="/ourservices"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Our Service
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink
                to="/#testimonials"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}

              >
                Testimonials
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink
                to="/blog"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Blog
              </NavHashLink>
            </li>


            <li className="nav-item">
              <NavHashLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Contact
              </NavHashLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
