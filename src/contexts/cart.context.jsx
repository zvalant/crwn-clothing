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
export const removeCartItem = (cartItems,productToRemove)=>{
    if(productToRemove.quantity >1){
        return cartItems.map((cartItem)=>
        cartItem.id===productToRemove.id?
        {...cartItem,quantity: cartItem.quantity -1}:
        cartItem)
    }
    return cartItems.filter((cartItem)=>{
        return cartItem.id!==productToRemove.id
    })    
}
export const clearCartItem = (cartItems,productToClear)=>{
    return cartItems.filter((cartItem)=>{
        return cartItem.id!==productToClear.id
    })
}




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartTotal:0,
    setCartTotal:()=>{},
    cartQuantity: 0,
    setCartQuantity: ()=>{}
})

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartQuantity,setCartQuantity] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItemFromCart = (productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove))
    }
    const clearItemFromCart = (productToClear)=>{
        setCartItems(clearCartItem(cartItems,productToClear))

    }
    useEffect((cartQuantity)=>{
        const totalQuantity = cartItems.reduce((quantity, cartItem) => {
            return quantity + cartItem.quantity;
        }, 0);
        setCartQuantity(totalQuantity)
    },[cartItems]);
    useEffect((cartTotal)=>{
        const totalCost = cartItems.reduce((cost, cartItem) => {
            return cost + (cartItem.quantity*cartItem.price);
        }, 0);
        setCartTotal(totalCost)
    },[cartItems]);
    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,removeItemFromCart,clearItemFromCart,cartQuantity,setCartQuantity,cartTotal,setCartTotal};
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}