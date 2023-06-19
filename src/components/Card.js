import React from 'react'

export default function Card(props) {
  return (
     <div>
         <div className="card">
            <div className="favorite">
              <img src="/img/heart-base.svg" alt="heartBase" />
            </div>
            
            <img width={133} height={112} src={props.img} alt="sneakers" />
            <h5>{props.name}</h5>
            <div className="cardPrice">
              <div className="cardPriceItem">
                <span>Price: </span>
                <b>{props.price} rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
              </button>
            </div>
         </div>
     </div>
  )
}
