import React, { createRef } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { AppStateContext } from "./AppState";

import CartCSS from "./Cart.module.css";

interface Props {}

interface State {
  isOpen: boolean;
}

/*
 * The context API provides hooks for accessing the context value but we cannot
 * use hooks in class components, so in class components, we can use renderProps API.
 */

//We can also extend PureCompenent, the implementatis is pretty the same.
class Cart extends React.Component<Props, State> {
  #containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.#containerRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  //We could also just use an arrow function instead of binding the this as above
  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  handleOutsideClick = (e: MouseEvent) => {
    if (
      this.#containerRef.current &&
      !this.#containerRef.current.contains(e.target as Node)
    ) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {/* This is the render props API i.e. () => {}*/}
        {(state) => {
          const itemsCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);

          return (
            <div className={CartCSS.cartContainer} ref={this.#containerRef}>
              <button
                className={CartCSS.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
