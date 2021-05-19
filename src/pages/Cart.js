import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalPrice = cartItems.length * 5.99;

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">
        Total:{" "}
        {totalPrice.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={() => placeOrder()}>{buttonText}</button>
        </div>
      ) : (
        <div>You have no items in your cart.</div>
      )}
    </main>
  );
}

export default Cart;
