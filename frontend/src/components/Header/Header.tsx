import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Новинний сервіс</h1>
      <nav className="header__nav">
        <Link to="/" className="header__link">Головна</Link>
        <Link to="/add" className="header__link">Додати новину</Link>
      </nav>
    </header>
  );
};

export default Header;