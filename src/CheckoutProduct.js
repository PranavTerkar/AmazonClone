import React from 'react'
import './checkoutProduct.css';
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, title, price, rating,image }) {

  const [{basket}, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt = '' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <div className="chackoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={RemoveFromBasket}> remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
