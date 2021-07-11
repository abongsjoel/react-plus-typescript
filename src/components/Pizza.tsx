import React from "react";

import { Pizza } from "../types";

import PizzaCSS from "./Pizza.module.css";
import { AddToCartProps, withAddToCart } from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

/*
 * This is a functional component, so we can use the context hooks API.
 */
const PizzaItem: React.FC<Props> = ({ pizza, addToCart }: Props) => {
  const handleAddToCartClick = () => {
    // addToCart({ id: pizza.id, name: pizza.name, price: pizza.price})
    addToCart(pizza);
  };

  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{pizza.price}</p>
        <button type="button" onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default withAddToCart(PizzaItem);
