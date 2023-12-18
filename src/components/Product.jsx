import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "./data/shop-Context";

function Product(props) {
  const { id, title, price, image } = props.dataa;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="products">

      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="description">
        <h3>{title}</h3>
      </div>
        <p>${price}</p>
      <div className="btn">
        <button onClick={() => addToCart(id)}> add to cart </button>
      </div>

    </div>
  );
}

export default Product;


