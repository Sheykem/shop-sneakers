import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const sneakers = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 3000 },
  { name: "Мужские Кроссовки Nike Air Max 270", price: 2800 },
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 3500 },
  { name: "Кроссовки Puma X Aka Boku Future Rider", price: 3600 },
];

function App() {
  return (
    <div className="wrapper clear ">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроcсовки</h1>
          <div className="searchBlock d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {sneakers.map((obj, id) => (
            <Card
              key={id}
              name={obj.name}
              price={obj.price}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
