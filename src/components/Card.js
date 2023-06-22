import React, { useState } from 'react'

export default function Card({onPlus, onFavorite, img, name, price}) {
  const [isAdded, setIsAdded] = useState(false)
  
  const handlePlus = () => {
    onPlus({ name, img, price})
    setIsAdded(!isAdded)
  }

  return (
     <div>
         <div className="card">
            <div className="favorite" onClick={onFavorite}>
              <img src="/img/heart-base.svg" alt="heartBase" />
            </div>
            
            <img width={133} height={112} src={img} alt="sneakers" />
            <h5>{name}</h5>
            <div className="cardPrice">
              <div className="cardPriceItem">
                <span>Price: </span>
                <b>{price} rub.</b>
              </div>
              <button className="button" onClick={handlePlus}>
              <img width={32} height={32}
              src={isAdded ? "/img/addCart.svg" : "/img/plus.svg"} alt="plus" />
              </button>
            </div>
         </div>
     </div>
  )
}
