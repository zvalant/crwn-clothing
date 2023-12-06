import {createContext,useEffect,useState} from "react";

export const addCartItem = (cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.id===productToAdd.id
    );
    if (existingCartItem){
        return cartItems.map((cartItem)=>
        cartItem.id===productToAdd.id?
        {...cartItem,quantity: cartItem.quantity +1}:
        cartItem)

    }
    return [...cartItems,{...productToAdd,quantity:1}]


}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartTotal:0,
    setCartTotal:()=>{},
    cartQuantity: 0,
    setCartQuantity: ()=>{}
})

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartQuantity,setCartQuantity] = useState(0);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    useEffect((cartQuantity)=>{
        const totalQuantity = cartItems.reduce((quantity, cartItem) => {
            return quantity + cartItem.quantity;
        }, 0);
        setCartQuantity(totalQuantity);
    },[cartItems]);
    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartQuantity,setCartQuantity};
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}