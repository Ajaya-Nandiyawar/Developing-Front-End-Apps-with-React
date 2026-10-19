import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { fallbackImage, plants } from "../data/plants";
import NavBar from "./NavBar";

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <>
      <NavBar />
      <main className="catalog">
        <header className="catalog-header">
          <p className="eyebrow">OUR COLLECTION</p>
          <h1>Find your perfect plant.</h1>
          <p>Thoughtfully grown companions for every corner of your home.</p>
        </header>
        {categories.map((category) => (
          <section className="category" key={category}>
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants.filter((plant) => plant.category === category).map((plant) => {
                const inCart = cart.some((item) => item.id === plant.id);
                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = fallbackImage;
                      }}
                    />
                    <div className="plant-card-content">
                      <span className="plant-category">{plant.category}</span>
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <div className="card-footer">
                        <strong>${plant.price.toFixed(2)}</strong>
                        <button disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
                          {inCart ? "Added" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
