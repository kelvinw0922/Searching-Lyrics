import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to={`/`}>
      <nav className="navbar navbar-dark bg-dark mb-5">
        <span className="navbar-brand mb-0 h1 mx-auto">Searching Lyrics</span>
      </nav>
    </Link>
  );
};

export default Navbar;
