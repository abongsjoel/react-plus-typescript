import React from "react";
import { Pizza } from "../types";
import { AddToCartProps, withAddToCart } from "./AddToCart";

import SpecialOfferCSS from "./SpecialOffer.module.css";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    // addToCart({ id: pizza.id, name: pizza.name, price: pizza.price})
    addToCart(pizza);
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

export default withAddToCart(SpecialOffer);
