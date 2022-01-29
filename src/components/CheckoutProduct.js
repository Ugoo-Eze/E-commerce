import { useDispatch } from "react-redux";
import "../styles/CheckoutProduct.css";
import { addToBasket, removeFromBasket } from "../features/basketSlice";
import Currency from "react-currency-formatter";

function CheckoutProduct({ id, title, price, rating, image }) {
  const dispatch = useDispatch();
  const addItem = () => {
    const product = {
      id,
      title,
      price,
      rating,
      image,
    };
    dispatch(addToBasket(product));
  };

  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="checkout__product">
      <img
        style={{
          height: "200px",
          width: "200px",
          objectFit: "contain",
          padding: "10px",
        }}
        src={image}
        alt=""
      />
      <div className="checkoutProduct__info" style={{ flex: "0.45" }}>
        <h5>{title}</h5>
        <div
          style={{ display: "flex", marginBottom: "10px", marginTop: "10px" }}
        >
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product__price">
          <Currency quantity={price} currency="NGN" />
        </p>
      </div>
      <div className="checkoutButton">
        <button onClick={addItem}>Add to Cart</button>
        <button onClick={removeItem}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
