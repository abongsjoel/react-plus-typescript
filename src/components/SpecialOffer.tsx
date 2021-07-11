import React from "react";
import { Pizza } from "../types";
import { useStateDispatch } from "./AppState";

import SpecialOfferCSS from "./SpecialOffer.module.css";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
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
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{pizza.price}</p>
        <button type="button" onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpecialOffer;
