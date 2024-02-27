import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-between ">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakres</h3>
          <p className="opacity-5">Магазин лучших кросовок </p>
        </div>
      </div>
      <ul className="headerRight d-flex align-center ">
        <li>
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span> 0 грн.</span>
        </li>
        <li>Закладки</li>
        <li>
          <img width={18} height={18} src="/img/UserImg.png" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
