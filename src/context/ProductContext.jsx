import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { CART, FAVOURITE } from "../constants";
import products from "../components/data/products";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(CART)) || []
  );
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem(FAVOURITE)) || []
  );

  const controlQuantity = (id, sign) => {
    let res = cart.map((pr) => {
      if (pr.id === id) {
        sign === "+" ? pr.quantity++ : pr.quantity--;
      }
      return pr;
    });
    return res;
  };

  const addToCart = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInCart = cart.find((pr) => pr.id === id);

    let newCart;

    if (productInCart) {
      newCart = controlQuantity(id, "+");
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  const addToFavourite = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInFavourite = favourite.find((pr) => pr.id === id);

    let newFavourite;

    if (productInFavourite) {
      newFavourite = controlQuantity(id, "+");
    } else {
      product.quantity = 1;
      newFavourite = [...favourite, product];
    }
    setFavourite(newFavourite);
    localStorage.setItem(FAVOURITE, JSON.stringify(newFavourite));
  };

  const increaseQuantity = (id) => {
    const newCart = controlQuantity(id, "+");
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  const decreaseQuantity = (id) => {
    let newCart;
    let productInCart = cart.find((pr) => pr.id === id);
    if (productInCart.quantity > 1) {
      newCart = controlQuantity(id, "-");
    } else {
      newCart = cart.filter((pr) => pr.id !== id);
    }
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  let totalPriceOfCart = cart.reduce(
    (acc, pr) => acc + pr.price * pr.quantity,
    0
  );

  const state = {
    cart,
    favourite,
    totalPriceOfCart,
    addToCart,
    addToFavourite,
    increaseQuantity,
    decreaseQuantity,
  };


  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductContextProvider;
