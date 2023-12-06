import React, {useContext} from 'react'



const CartItem = ({cartItem}) =>{
  const {name, quantity,price} = cartItem;

  return (
    <div>
        <h2>{name}</h2>
        <span>{price} X {quantity} = {price*quantity}</span>

    </div>
  )
}

export default CartItem;
