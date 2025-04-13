import { useParams } from "react-router-dom"
import {products} from "./products.json"
import React from "react";
const Product = () => {
  const {id} = useParams();
  // console.log("productId", id);

  const {title, description, thumbnail, price, category} = products.find(product => product.id == id);

  return (
    <div>
      <h3>{title}</h3>
      <img src={thumbnail} style={{height:150, width:150, objectFit:"contain"}}/>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  )
}

export default React.memo(Product)