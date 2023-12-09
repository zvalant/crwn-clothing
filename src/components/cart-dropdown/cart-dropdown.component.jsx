<<<<<<< HEAD
import React,{useContext} from 'react';
import {useHistory} from "react-router-dom";
=======
import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 5f0f6a5161c4b121e4aabd3c29b8cac448019e90
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from '../../contexts/cart.context';

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
<<<<<<< HEAD
  const history = useHistory();
  const goToCheckout = ()=>{
    history.push("./checkout");
  };
=======
  const navigate = useNavigate();
  const handleGoToCheckout = ()=>{
    navigate("/checkout");

  }

>>>>>>> 5f0f6a5161c4b121e4aabd3c29b8cac448019e90
  return (
    <div className = "cart-dropdown-container">
        <div className = "cart-items">
          {cartItems.map(item=><CartItem cartItem = {item}/>)}
        </div>
<<<<<<< HEAD
        <Button onClick = {goToCheckout}>Go TO CHECKOUT</Button>
=======
        <Button onClick = {handleGoToCheckout}>
          GO TO CHECKOUT
        </Button>
>>>>>>> 5f0f6a5161c4b121e4aabd3c29b8cac448019e90
        <div>
        </div>
    </div>

  )
  }
  export default CartDropDown;

