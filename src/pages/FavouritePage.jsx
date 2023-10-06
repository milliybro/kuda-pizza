import { Fragment, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import FavouriteCard from "../components/card/FavouriteCard";

const FavouritePage = () => {
  const { favourite} = useContext(ProductContext);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h1 className="text-center">like</h1>
          {favourite.length!==0 ? (favourite.map((pr) => (
            <FavouriteCard key={pr.id} {...pr} />
          ))) : (<div className='emptyCart text-center'>
          <img src="https://i.pinimg.com/originals/fc/35/26/fc3526ea3315b365d1b5838b937ebb6d.gif" className='emptyGIF' />
      </div>)}
        </div>
      </section>
    </Fragment>
  );
};

export default FavouritePage;
