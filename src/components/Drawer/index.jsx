import React from "react";
import s from "./Drawer.module.scss";
const Drawer = ({ onCloseCart, cartSneakers = [] }) => {
  return (
    <div className={s.overlay}>
      <div className={s.drawerBlock}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onCloseCart}
            className="cu-p"
            src="/img/removeBtn.svg"
            alt="Remove"
          />
        </h2>
        <div className={s.items}>
          {cartSneakers.map((obj) => (
            <div className={`${s.cartItem} d-flex align-center mb-20`}>
              <div
                className={s.cartItemImg}
                style={{ backgroundImage: `url(${obj.img})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.name}</p>
                <b>{obj.price} грн.</b>
              </div>
              <img
                className={s.removeBtn}
                src="/img/removeBtn.svg"
                alt="remove"
              />
            </div>
          ))}
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
