import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setallPhotos] = useState([]);

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
        console.log(id);
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setallPhotos(updateArr);
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
