import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header: React.FC = () => {
  return (
    <div className="headerbackground">
      <header>
        <nav>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/instafeed" className="instafeed">Instafeed</Link>
            <Link to="/soundcloud">Soundcloud</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;


