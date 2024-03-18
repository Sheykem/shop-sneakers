import { useState } from "react";
import React from "react";
import s from "./Card.module.scss";
const Card = ({ name, price, onClickPlus, onClickFavorite, img }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const complitedBuy = () => {
    onClickPlus({ name, price, img });
    setIsAdded(!isAdded);
  };
  const onFavorite = () => {
    onClickFavorite({name,price,img})
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={s.card}>
      <div className={s.favorite}>
        <img
          onClick={onFavorite}
          src={isFavorite ? "/img/Liked.svg" : "/img/Unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={117} src={img} alt="sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <button className={s.button}>
          <div></div>
          <img
            onClick={complitedBuy}
            src={isAdded ? "/img/complitBuy.svg" : "/img/plus.svg"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
