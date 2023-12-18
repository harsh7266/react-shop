import React, { useContext } from "react";
import ShopContext from "./data/shop-Context";
import "./cartitem.css";

function Cartitem(props) {
  const { id, image, title,price } = props.dataa;
  const { cartitems, addToCart, removefromcart } = useContext(ShopContext);
  return (
    <div className="item">

       <div className="image">
      <img src={image} alt="" />
       </div>
      <div className="description">
        <p>
          <b>{title}----</b>
          <b>${price}</b>
        </p>
        <div className="counthandler">
          <button onClick={() => removefromcart(id)}> - </button>
          <p>{cartitems[id]}</p>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
      
    </div>
  );
}

export default Cartitem;


