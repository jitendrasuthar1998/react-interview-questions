import { useContext } from 'react'
import { CartContext } from "./cartContext"
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  
  // const {cartProducts} = useContext(CartContext);

  const cartProducts = useSelector((store)=> store.cart.cartProducts);
  console.log("cartProducts", cartProducts)
  const cartTotal = cartProducts.reduce((acc, item)=> {
    // console.log("acc", acc);
    // console.log("item", item);

    let sum = (item.price * item.quantity) + acc;
    return sum;
  },0)
  return (
    <div>
      <h1>Cart Items</h1>
      <div style={{display:"flex",}}>
        <div>
        {cartProducts?.length ? cartProducts.map((cartItem)=> <CartItem key={cartItem.id} item={cartItem}/>) : <p>Cart is empty.</p>}
        </div>
        <div>
          <h3>Cart Total: {cartTotal.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}

export default Cart