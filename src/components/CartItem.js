import React, { useState, useContext } from "react";
import { Context } from "../Context";

export default function CartItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const { removeFromCart } = useContext(Context);

  const iconClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}
