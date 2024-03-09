import React from "react";
import s from "./Drawer.module.scss";
const Drawer = () => {
  return (
    <div style={{ display: "none" }} className={s.overlay}>
      <div className={s.drawerBlock}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img className="cu-p" src="/img/removeBtn.svg" alt="Remove" />
        </h2>
        <div className={s.items}>
          <div className={`${s.cartItem} d-flex align-center mb-20`}>
            <div
              className={s.cartItemImg}
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>3000 грн.</b>
            </div>
            <img
              className={s.removeBtn}
              src="/img/removeBtn.svg"
              alt="remove"
            />
          </div>
          <div className={`${s.cartItem} d-flex align-center mb-20`}>
            <div
              className={s.cartItemImg}
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>3000 грн.</b>
            </div>
            <img
              className={s.removeBtn}
              src="/img/removeBtn.svg"
              alt="remove"
            />
          </div>
        </div>
        <div className={s.cartTotalBlock}>
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
          <button className={s.greenButton}>
            Оформить заказ <img src="/img/arrowInBtn.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
