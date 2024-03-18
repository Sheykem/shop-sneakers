import Header from "./components/Header";
import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import { useState } from "react";

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartFavorite, setCartFavorite] = useState([]);
  React.useEffect(() => {
    fetch("https://6578bc9cf08799dc8045f462.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSneakers(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartSneakers((prev) => [...prev, obj]);
  };

  const onAddToFavorite = (obj) => {
    setCartFavorite((prev) => [...prev, obj]);
  };
  return (
    <div className="wrapper clear ">
      {cartOpened && (
        <Drawer
          cartSneakers={cartSneakers}
          onCloseCart={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="favorite">
        {cartFavorite.map((el) => (
          <div>
            <h4>{el.name}</h4>
            <p>{el.price}</p>
            <p></p>
            <img src={el.img} alt="" />
          </div>
        ))}
      </div>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроcсовки</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.map((item, id) => (
            <Card
              key={id}
              name={item.title}
              price={item.price}
              img={item.imgUrl}
              onClickPlus={(obj) => onAddToCart(obj)}
              onClickFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
