/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "./cartContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cartSlice";

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

const ProductCard = ({ item }) => {
  
  const { title, category, price, discountedPrice, thumbnail } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (itemId) => {
    navigate(`/products/${itemId}`)
  }

  return (
    <div
      onClick={()=> dispatch(handleClick(item.id))}
      style={{
        minWidth: 300,
        maxWidth: 400,
        borderRadius: 10,
        border: "1px solid red",
        padding: 10,
      }}
    >
      <img src={thumbnail} style={{ height: 150, width: 250 }} />
      <h3 title={title}>{title.substring(0, 20)}...</h3>
      <p>
        {price} {discountedPrice}
      </p>
      <p>Category : {category}</p>
      <button
        onClick={(e) =>
        {
          e.stopPropagation()
          dispatch(addProductToCart({
            id: item.id,
            title,
            category,
            price,
            discountedPrice,
            thumbnail,
          }))
          
        }
        }
        style={{ border: "1px solid black" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
