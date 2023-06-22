import React from 'react'

export default function Cart({onClose, items = []}) {
  return (
     <div>
        <div className="right-shadow">
          <div className="right-cart">
            <h2>Cart
              <img onClick={onClose} src="/img/cart-remove.svg" alt="remove" />
            </h2>

            <div className="items">
            {
              items.map((obj) => (
                <div>
                  <div className="cartItem">
                    <img width={70} height={70} src={obj.img} alt="sneakers" />
                    <div>
                      <p>{obj.name}</p>
                      <b>{obj.price} rub.</b>
                    </div>
                    <img src="/img/cart-remove.svg" alt="remove" />
                  </div>
                </div>
              ))
            }
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
