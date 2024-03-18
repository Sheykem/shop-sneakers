import React from "react";
import s from "./Headr.module.scss";
const menu = [
  { card: "/img/cart.svg", name: "Закладки", user: "/img/UserImg.png" },
];
const Header = ({ onClickCart }) => {
  return (
    <header className="d-flex justify-between ">
      <div className={`${s.headerLeft} d-flex align-center`}>
        <img
          width={40}
          height={40}
          className="cu-p"
          src="/img/logo.png"
          alt="Logo"
        />
        <div className={s.headerInfo}>
          <h3 className="text-uppercase">React Sneakres</h3>
          <p className="opacity-5">Магазин лучших кросовок </p>
        </div>
      </div>
      {menu.map((val, id) => (
        <ul key={id} className={`${s.headerRight} d-flex align-center `}>
          <li onClick={onClickCart}>
            <img width={18} height={18} src={val.card} alt="" />
            <span> 0 грн.</span>
          </li>
          <li>{val.name}</li>
          <li>
            <img width={18} height={18} src={val.user} alt="" />
          </li>
        </ul>
      ))}
    </header>
  );
};

export default Header;
