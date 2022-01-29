import "../styles/Products.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../features/basketSlice";
import Currency from "react-currency-formatter";

function Products({ id, title, price, rating, image }) {
  const dispatch = useDispatch();
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      image,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className="products">
      <img src={image} alt="product" />
      <div className="product__info">
        <p>{truncate(`${title}`, 50)}</p>
        <p className="product__price">
          <Currency quantity={price} currency="NGN" />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addItemToBasket}>Add to Cart</button>
    </div>
  );
}

export default Products;
