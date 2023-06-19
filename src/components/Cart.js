import React from 'react'

export default function Cart() {
  return (
     <div>
        <div style={{display: 'none'}} className="right-shadow">
          <div className="right-cart">
            <h2>Cart
              <img src="/img/cart-remove.svg" alt="remove" />
            </h2>

            <div className="items">
              <div className="cartItem">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 rub.</b>
              </div>
              <img src="/img/cart-remove.svg" alt="remove" />
            </div>
            <div className="cartItem">
              <img width={70} height={70} src="/img/sneakers/2.jpg" alt="sneakers" />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 rub.</b>
              </div>
              <img src="/img/cart-remove.svg" alt="remove" />
              </div>            
            </div>

            <div>
              <ul className="rightCartFooter">
                <li>
                  <span>Total: </span>
                  <div></div>
                  <b>21 498 rub. </b>
                </li>
                <li>
                  <span>Tax 5%: </span>
                  <div></div>
                  <b>1074 rub.</b>                
                </li>    
                <button className="greenBtn">
                  Order
                  <img src="/img/arrow.svg" alt="arrow" />
                </button>
              </ul>            
            </div>        
            
          </div>
      </div> 
    </div>
  )
}
