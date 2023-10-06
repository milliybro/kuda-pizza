import { Fragment, useContext } from "react";
import ProductCard from "../components/card/ProductCard";
import categories from "../components/data/category";
import products from "../components/data/products";

import filter from "../assets/navbar/Filter.png";
import "./Home.css";
import DeliverPizza from "../components/card/DeliverPizza";
import DeliverPizzaSet from "../components/card/DeliverPizzaSet";
import { LanguageContext } from "../context/LanguageContext";

const HomePage = () => {
  const { lang} = useContext(LanguageContext);

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {categories.map((category, i) => (
              <Fragment key={i}>
                <div className="categories">
                  <img src={category.image} alt="" />
                  <h3>{category.name}</h3>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <DeliverPizzaSet />
            <DeliverPizza />
            <DeliverPizzaSet />
            <DeliverPizza />
          </div>
          <div className="deliver d-flex justify-content-between align-items-center gap-4">
            <h4 className="deliver-text">{lang.deliver}</h4>
            <input type="text" placeholder={lang.address} />
            <button>{lang.tekshiring}</button>
          </div>
          {categories.map((category, i) => (
            <Fragment key={i}>
              <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
                <h3 className="category-name">{category.name}</h3>
                <h4 className="category-filter">
                  <img src={filter} alt="" /> Фильтры
                </h4>
              </div>
              <div className="row">
                {products
                  .filter((el) => el.category === category.name)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                    >
                      <ProductCard {...product} />
                    </div>
                  ))}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
