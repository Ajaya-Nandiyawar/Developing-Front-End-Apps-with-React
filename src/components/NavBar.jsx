import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const itemCount = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link className="brand" to="/">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart" aria-label={`Cart with ${itemCount} items`}>
          <span aria-hidden="true">🛒</span> Cart <b>{itemCount}</b>
        </Link>
      </div>
    </nav>
  );
}
