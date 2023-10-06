import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./ProductCard.css";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ControlQuantityBtnGroup from "../shares/ControlQuantityBtnGroup";
import { LazyLoadImage } from "react-lazy-load-image-component";
import heart from "../../assets/navbar/heart.png"
// import fullHeart from "../../assets/navbar/heart-full.png"

const ProductCard = ({ id, image, name, filter, description, price }) => {
  const { addToCart, cart } = useContext(ProductContext);
  let productInCart = cart.find((pr) => pr.id === id);
  return (
    <div className="card product">
      <LazyLoadImage effect="blur" src={image} alt={name} />
      <h6 className="filter">
        {filter ? <h6 className="filtera">{filter}</h6> : ""}
      </h6>
      <img className="heart" src={heart} alt="" />
      <div className="card-body">
        <Link to={`/products/${id}`} className="card-name">
          {name}
        </Link>
        <p className="card-desc">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          {productInCart ? (
            <Fragment>
              <ControlQuantityBtnGroup
                id={id}
                quantity={productInCart.quantity}
              />
            </Fragment>
          ) : (
            <button onClick={() => addToCart(id)} className="btn card-btn">
              Выбрать
            </button>
          )}
          <span className="card-price">от {price} ₽</span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
