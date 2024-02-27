import React from "react";

const Drawer = () => {
  return (
    <div style={{display:"none"}} className="overlay">
      <div className="drawerBlock">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img className="cu-p" src="/img/removeBtn.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>3000 грн.</b>
            </div>
            <img className="removeBtn" src="/img/removeBtn.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>3000 грн.</b>
            </div>
            <img className="removeBtn" src="/img/removeBtn.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>6000 грн.</b>
            </li>
            <li>
              <span>Налог 5% :</span>
              <div></div>
              <b>300 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrowInBtn.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
