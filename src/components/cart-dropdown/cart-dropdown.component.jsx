import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from '../../contexts/cart.context';

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  const handleGoToCheckout = ()=>{
    navigate("/checkout");
  }

  return (
    <div className = "cart-dropdown-container">
        <div className = "cart-items">
          {cartItems.map(item=><CartItem cartItem = {item}/>)}
        </div>
        <Button onClick = {handleGoToCheckout}>
          GO TO CHECKOUT
        </Button>
        <div>
        </div>
    </div>

  )
  }
  export default CartDropDown;

