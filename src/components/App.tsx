import React from "react";

import Pizza from "./Pizza";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import pizzas from "../data/pizzas.json";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>

        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}

        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
