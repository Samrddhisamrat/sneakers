import React from 'react'

export default function Header() {
  return (
     <header className='header'>
         <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>React sneakers</h3>
            <p className="headerSlogan">Магазин лучших кроссовок</p>
          </div>
         </div>
        
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 rub.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
     </header>
  )
}
