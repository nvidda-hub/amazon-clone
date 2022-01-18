import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="Star">
                  🌟
                </span>
              </p>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove Item from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
