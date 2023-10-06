import { Fragment, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "../components/card/CartCard";

const CartPage = () => {
  const { cart, totalPriceOfCart } = useContext(ProductContext);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h1 className="text-center">Корзина</h1>
          {cart.length!==0 ? (cart.map((pr) => (
            <CartCard key={pr.id} {...pr} />
          ))) : (<div className='emptyCart text-center bg-white'>
          <img src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" className='emptyGIF' />
      </div>)}
          
          <button className="btn btn-warning">
            Checkout {totalPriceOfCart} $
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default CartPage;
