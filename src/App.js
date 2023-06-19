import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {

  const arr = [
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      img: '/img/sneakers/1.jpg',
      desc: "Good"
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 11999,
      img: '/img/sneakers/2.jpg',
      desc: "Super Good"
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      img: '/img/sneakers/3.jpg',
      desc: "Adbott"
    },
    {
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      img: '/img/sneakers/4.jpg',
      desc: "Adbott"
    }
  ]

  return (
    <div className='wrapper'>
      
      <Cart />
      <Header />  

      <div className="content">
        <div className="headerSearch">
          <h1 className="headerCards">Все кроссовки</h1>
          <div className="search-block">
            <img width={20} height={20} src="/img/search.png" alt="search" />
            <input placeholder="Search..."/>
          </div>
        </div>          

        <div className="sneakers">
          {arr.map((el) => (
            <Card name={el.name} price={el.price} img={el.img} />
          ))}      
        </div>
        
      </div>
    </div>
  );
}

export default App;
