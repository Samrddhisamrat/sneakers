import React, {useEffect, useState} from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://649163092f2c7ee6c2c81eaa.mockapi.io/sneakersItem').then(res => {
      return res.json()
    }).then(json =>
      setItems(json));
  })
  
  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
  
  console.log(cartItems)

  return (   

    <div className='wrapper'>
      
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />  

      <div className="content">
        <div className="headerSearch">
          <h1 className="headerCards">Все кроссовки</h1>
          <div className="search-block">
            <img width={20} height={20} src="/img/search.png" alt="search" />
            <input placeholder="Search..."/>
          </div>
        </div>          

        <div className="sneakers">
          {items.map((el) => (
            <Card
              name={el.name}
              price={el.price}
              img={el.img}
              onFavorite={() => alert("You're add to Favorite bookmarks")}
              onPlus={(obj) => onAddToCart(obj)}               
              />
          ))}      
        </div>
        
      </div>
    </div>
  );
}

export default App;
