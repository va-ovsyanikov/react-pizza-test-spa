import React from "react";
import pizzalogo from "../assets/img/pizza-logo.svg";
const Logo = () => {
  return (
    <div className="header__logo">
      <img width="38" src={pizzalogo} alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};

export default Logo;
