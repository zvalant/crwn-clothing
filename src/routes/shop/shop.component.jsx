import { useContext } from "react";
import "./shop.styles.scss"

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () =>{
    const {categoriesMap} = useContext(CategoriesContext);
    return (

            <div className ="products-container">

            </div>
   

    )
}
export default Shop;