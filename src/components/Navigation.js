import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/photo-cv.jpg" alt="profil-pic" />
          <h3 className="name">Marie-Line El Houakmi</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
          </NavLink>

          <NavLink
            to="/competences"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </li>
          </NavLink>

          <NavLink
            to="/portfolio"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/marie-line-el-houakmi-448630216/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/PetitMyosotis">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Marie-Line EL Houakmi - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
