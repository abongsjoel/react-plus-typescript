import React from "react";

import { useStateDispatch } from "./AppState";
import { Pizza } from "../types";

import PizzaCSS from "./Pizza.module.css";

interface Props {
  pizza: Pizza;
}

/*
 * This is a functional component, so we can use the context hooks API.
 */
const PizzaItem: React.FC<Props> = ({ pizza }: Props) => {
  const dispatch = useStateDispatch();

  const handleAddToCartClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        // item: { id: pizza.id, name: pizza.name, price: pizza.price}
        item: pizza,
      },
    });
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

export default PizzaItem;
