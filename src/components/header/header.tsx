import React from "react";
import { Link } from "react-router-dom";
import './header.css'
import { FiHome } from 'react-icons/fi'

const Header: React.FC = () => {
  return (
    <div className="headerbackground">
      <header>
        <nav>
          <div className="links">
            <Link to="/" className="homesymbollink">
              <FiHome className="homeSymbol" size="35px" color="white" margin-top="10px" />
            </Link>
            <Link to="/" className="linktext linktext-home">
              Home
            </Link>

            <Link to="/instafeed" className="linktext">Instafeed</Link>
            <Link to="/soundcloud" className="linktext">Soundcloud</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;


