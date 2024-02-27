import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/Unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={117} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>3000 грн.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
