import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

export default function CartItem({ item }) {
  //   const [isHovered, setIsHovered] = useState(false);
  const [isHovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const iconClassName = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${iconClassName}`}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
