import { Fragment, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "../components/card/CartCard";

const CartPage = () => {
  const { cart, totalPriceOfCart } = useContext(ProductContext);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h1 className="text-center">CartPage</h1>
          {cart.map((pr) => (
            <CartCard key={pr.id} {...pr} />
          ))}
          <button className="btn btn-warning">
            Checkout {totalPriceOfCart} $
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default CartPage;
