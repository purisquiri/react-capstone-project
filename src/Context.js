import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setallPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setallPhotos(data));
  };

  function toggleFavorite(id) {
    const updateArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setallPhotos(updateArr);
  }

  function addToCart(newItem) {
    setCartItems((prevState) => [...prevState, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
