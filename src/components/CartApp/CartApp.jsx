import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CartHome from "./CartHome";
// import Cart from "./Cart";
// import Product from "./Product";
import { Provider } from "react-redux";
import store from "../../store/cartStore";
import { lazy, Suspense } from "react";

const Product = lazy(()=> import("./Product"));
const Cart = lazy(()=> import("./Cart"));
const CartHome = lazy(()=> import("./CartHome"));

const CartApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading..</h1>}>
        <Routes>
          <Route path="/" element={<CartHome />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default CartApp;
