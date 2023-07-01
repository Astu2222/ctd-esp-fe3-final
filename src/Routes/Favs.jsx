import React, { useEffect, useState, useReducer } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useGlobalState } from "../Components/utils/global.context";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    case "REMOVE_ALL_FAVS":
      return [];
    default:
      return state;
  }
}

const Favs = () => {
  const { theme } = useGlobalState();
  const [favs, dispatch] = useReducer(reducer, initialState);
  const [storedFavs, setStoredFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setStoredFavs(storedFavs);
  }, []);

  const handleAddFav = (favCard) => {
    // Verificar si la Card ya existe en favoritos
    const isDuplicate = favs.some((fav) => fav.id === favCard.id);
    if (isDuplicate) {
      window.alert("Esta Card ya está en favoritos");
      return;
    }

    dispatch({ type: "ADD_FAV", payload: favCard });
    const updatedFavs = [...favs, favCard];
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    setStoredFavs(updatedFavs);
    window.alert("Agregado a favoritos");
  };

  const handleRemoveAllFavs = () => {
    dispatch({ type: "REMOVE_ALL_FAVS" });
    localStorage.removeItem("favs");
    setStoredFavs([]);
  };

  return (
    <main className={theme}>
      {storedFavs.length > 0 && (
        <button className="deleteButton" onClick={handleRemoveAllFavs}>Eliminar todos</button>
      )}
      <div className="card-grid">
        {storedFavs.map((fav) => (
          <Link key={fav.id} to={`/dentist/${fav.id}`}>
            <Card
              name={fav.name}
              username={fav.username}
              id={fav.id}
              handleAddFav={handleAddFav}
              isFav={favs.some((f) => f.id === fav.id)}
              showAddFavButton={false} // Nueva prop para ocultar el botón
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Favs;
