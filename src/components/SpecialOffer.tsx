import React from "react";
import { Pizza } from "../types";
import { WithAddToCartProps } from "./AddToCart";

import SpecialOfferCSS from "./SpecialOffer.module.css";

interface Props {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{pizza.price}</p>
        <WithAddToCartProps>
          {({ addToCart }) => {
            return (
              <button
                type="button"
                onClick={() =>
                  // addToCart({
                  //   id: pizza.id,
                  //   name: pizza.name,
                  //   price: pizza.price,
                  // })
                  addToCart(pizza)
                }
              >
                Add to Cart
              </button>
            );
          }}
        </WithAddToCartProps>
      </div>
    </div>
  );
};

export default SpecialOffer;
