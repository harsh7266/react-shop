import React, { useState } from "react";
import { createContext } from "react";
import data from "./data";

export const ShopContext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let i = 0; i < data.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider= (props) => {

  const [cartitems, setcartitems] = useState(getdefaultcart());

  const getTotalcartamount = () =>{
    let totaAmount = 0
     for(const item in cartitems){
      if(cartitems[item] > 0){
        let iteminfo=data.find((product) => product.id === Number(item))
        totaAmount += cartitems[item] * iteminfo.price
      }
     }
     return totaAmount
  }

  const addToCart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removefromcart = (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextvalue = { cartitems, addToCart, removefromcart,getTotalcartamount };

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
}


export default ShopContext


