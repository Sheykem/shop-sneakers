import React from "react";
import s from "./Card.module.scss";
const Card = ({ name, price, onClick }) => {
  return (
    <div className={s.card}>
      <div className={s.favorite}>
        <img src="/img/Unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={117} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <button onClick={onClick} className={s.button}>
          <img src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
