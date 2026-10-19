import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import cartReducer from "./store/CartSlice";
import App from "./App";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import NavBar from "./components/NavBar";
import "./App.css";

const store = configureStore({ reducer: { cart: cartReducer } });

function CartPage() {
  return <CartContents />;
}

function CartContents() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <>
      <NavBar />
      <main className="cart-page">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping cart</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is waiting for something green.</p>
            <Link className="continue-button" to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            {cart.map((item) => <CartItem item={item} key={item.id} />)}
            <div className="cart-summary">
              <h2>Total: ${total.toFixed(2)}</h2>
              <div className="cart-actions">
                <Link className="continue-button" to="/plants">Continue Shopping</Link>
                <button className="checkout-button" onClick={() => window.alert("Coming Soon!")}>Checkout</button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
