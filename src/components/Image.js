import React, { useState, useContext } from "react";
import { Context } from "../Context";

export default function Image({ className, img }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="random photos" />
      {isHovered && (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      )}
      {isHovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
}
