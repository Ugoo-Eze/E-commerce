import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../features/basketSlice";
import Header from "./Header";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useHistory } from "react-router-dom";
import Currency from "react-currency-formatter";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const history = useHistory();

  const proceedCheckout = (e) => {
    e.preventDefault();
    history.push("/payment");
  };

  return (
    <div className="checkout">
      <Header />
      <div style={{ display: "flex", marginLeft: "52px" }}>
        <div className="checkout__left">
          <img
            style={{ width: "1020px", height: "250px", objectFit: "none" }}
            src="https://ng.jumia.is/cms/8-18/jumia-food/designs/jprime.jpg"
            alt=""
          />
          <div
            style={{
              backgroundColor: "white",
              margin: "5px",
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid 0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
            }}
          >
            <h2
              style={{
                paddingBottom: "4px",
                padding: "7px",
                border: "1px",
                marginBottom: "5px",
              }}
            >
              {items.length === 0
                ? "Your Shopping Basket is Empty"
                : "Your Shopping Basket"}
            </h2>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div
          className="checkout__right"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            paddingTop: "30px",
            backgroundColor: "white",
            paddingLeft: "22px",
            paddingRight: "22px",
            flex: "0.8",
          }}
        >
          {items.length > 0 && (
            <>
              <h4>
                Subtotal ({items.length} items):  {" "}
                <span style={{fontWeight: '800'}}>
                  <Currency quantity={total} currency="NGN" />
                </span>
              </h4>
              <button
                className="checkoutoutRight__btn"
                onClick={proceedCheckout}
              >
                PROCEED
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
