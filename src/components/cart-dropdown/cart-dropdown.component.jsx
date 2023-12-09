import React,{useContext} from 'react';
import {useHistory} from "react-router-dom";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from '../../contexts/cart.context';

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
  const history = useHistory();
  const goToCheckout = ()=>{
    history.push("./checkout");
  };
  return (
    <div className = "cart-dropdown-container">
        <div className = "cart-items">
          {cartItems.map(item=><CartItem cartItem = {item}/>)}
        </div>
        <Button onClick = {goToCheckout}>Go TO CHECKOUT</Button>
        <div>
        </div>
    </div>

  )
  }
  export default CartDropDown;

