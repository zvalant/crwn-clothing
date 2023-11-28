import React from "react";
import "./product-card.styles.scss"
import Button from "../button/button.component";
const ProductCard = ({product}) =>{
    const {id,name,imageUrl,price} = product

    return (
        <div className = "product-card-container">
            <img
                alt = {`product: ${name}`}
                src = {`${imageUrl}`}

            />
            <div className = "footer">
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <Button buttonType={"inverted"} name = "add to cart">Add To Cart</Button>

        </div>
    )
}
export default ProductCard;