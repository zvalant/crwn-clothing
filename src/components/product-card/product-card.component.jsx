import React, {useContext} from "react";
import "./product-card.styles.scss"
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";


const ProductCard = ({product}) =>{
    const {id,name,imageUrl,price} = product
    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () =>{
        addItemToCart(product);
    }
    

    return (
        <div className = "product-card-container" key = {id}>
            <img
                alt = {`product: ${name}`}
                src = {`${imageUrl}`}

            />
            <div className = "footer">
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <Button buttonType={"inverted"} name = "add to cart" onClick = {addProductToCart}>Add To Cart</Button>

        </div>
    )
}
export default ProductCard;