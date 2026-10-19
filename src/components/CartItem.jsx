import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../store/CartSlice";
import { fallbackImage } from "../data/plants";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackImage;
        }}
      />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)} each</p>
        <div className="quantity-controls">
          <button aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>
      <div className="cart-item-total">
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
      </div>
    </article>
  );
}
