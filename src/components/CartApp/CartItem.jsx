/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import { decrementQuantity, incrementQuantity, removeProductFromCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

// {
//     "id": 1,
//     "title": "Essence Mascara Lash Princess",
//     "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//     "category": "beauty",
//     "price": 9.99,
//     "discountPercentage": 7.17,
//     "rating": 4.94,
//     "stock": 5,
//     "tags": [
//         "beauty",
//         "mascara"
//     ],
//     "brand": "Essence",
//     "sku": "RCH45Q1A",
//     "weight": 2,
//     "dimensions": {
//         "width": 23.17,
//         "height": 14.43,
//         "depth": 28.01
//     },
//     "warrantyInformation": "1 month warranty",
//     "shippingInformation": "Ships in 1 month",
//     "availabilityStatus": "Low Stock",
//     "reviews": [
//         {
//             "rating": 2,
//             "comment": "Very unhappy with my purchase!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "John Doe",
//             "reviewerEmail": "john.doe@x.dummyjson.com"
//         },
//         {
//             "rating": 2,
//             "comment": "Not as described!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "Nolan Gonzalez",
//             "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//         },
//         {
//             "rating": 5,
//             "comment": "Very satisfied!",
//             "date": "2024-05-23T08:56:21.618Z",
//             "reviewerName": "Scarlett Wright",
//             "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//         }
//     ],
//     "returnPolicy": "30 days return policy",
//     "minimumOrderQuantity": 24,
//     "meta": {
//         "createdAt": "2024-05-23T08:56:21.618Z",
//         "updatedAt": "2024-05-23T08:56:21.618Z",
//         "barcode": "9164035109868",
//         "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
//     },
//     "images": [
//         "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//     ],
//     "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
// },

const CartItem = ({ item }) => {
  // const { decrementQuantity, incrementQuantity, removeProductFromCart } =
  //   useContext(CartContext);

  const { title, category, price, discountedPrice, thumbnail, quantity } = item;

  const dispatch = useDispatch();
  
  const handleDecrement = (itemId, itemQuantity) => {
    if (itemQuantity > 1) {
        dispatch(decrementQuantity(itemId));
    } else {
        console.log("Removing product from cart");
        dispatch(removeProductFromCart(itemId));
    }
};

  return (
    <div
      style={{
        minWidth: 300,
        borderRadius: 10,
        border: "1px solid red",
        padding: 10,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img src={thumbnail} style={{ height: 150, width: 250 }} />
      <div style={{ backgroundColor: "orange" }}>
        <p title={title}>{title.substring(0, 20)}...</p>
        <p>
          {price} {discountedPrice}
        </p>
        <p>Category : {category}</p>
        {/* <button onClick={()=> addProductToCart({id:item.id,title, category, price,  discountedPrice, thumbnail}) } style={{border:"1px solid black"}}>Add to Cart</button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <button
            style={{
              height: 30,
              width: 30,
              border: "1px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => dispatch(incrementQuantity(item.id))}
          >
            +
          </button>
          <span
            style={{
              height: 30,
              width: 30,
              border: "1px solid red",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              alignItems: "center",
            }}
          >
            {quantity}
          </span>
          <button
            style={{
              height: 30,
              width: 30,
              border: "1px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleDecrement(item.id, item.quantity)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
