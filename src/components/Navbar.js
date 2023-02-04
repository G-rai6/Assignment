import React from "react";
// import Navbarstyle from '../components/Navbarstyle.css';
import "./Navbarstyle.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <p style={{fontWeight:"700",color:"white",fontFamily:""}}>CODING MASTERS</p>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Blog</li>

          <li>Contact Us</li>

          <li>Courses</li>
          <li>Login/Signup</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
