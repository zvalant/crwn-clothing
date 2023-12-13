import React from "react";
import { useNavigate } from "react-router-dom";

import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title,products}) =>{
    const navigate = useNavigate();
    const handlePreview = ()=>{
        console.log(title);
        navigate(`/shop/${title}`);
    }
    return (
        <div className="category-preview-container">
            <h2>
                <span className="title" onClick={handlePreview}>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                products
                    .filter((_,idx) => idx<4)
                    .map((product)=>{
                    return(<ProductCard key={product.id} product = {product}/>)
                })
                }
            </div>
        </div>
    )
}
export default CategoryPreview;