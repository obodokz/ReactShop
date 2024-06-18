import React, {createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++)
    {
        cart[index] = 0;
    }
    return cart;
}



const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
        console.log(cartItems);
    }

    const removeFromoCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmout = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmout += itemInfo.new_price * cartItems[item];
            }
            return totalAmout;
        }
    }
    const contextValue = {getTotalCartAmount,all_product, cartItems, addToCart, removeFromoCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
