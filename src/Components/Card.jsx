import React from "react";


const Card = ({ name, username, id, handleAddFav, isFav, showAddFavButton = true }) => {
  const addFav = (event) => {
    event.preventDefault();
    const favCard = { name, username, id };
    const existingFavs = localStorage.getItem("favs");
    const favs = existingFavs ? JSON.parse(existingFavs) : [];

    // Verificar si la Card ya existe en favoritos
    const isDuplicate = favs.some((fav) => fav.id === id);
    if (isDuplicate) {
      window.alert("Esta Card ya está en favoritos");
      return;
    }

    favs.push(favCard);
    localStorage.setItem("favs", JSON.stringify(favs));
    window.alert("Agregado a favoritos");
  };

  return (
  <div className="card">
    <img className='img' src="../images/doctor.jpg" alt="Imagen DH"/>
    <h2>{name}</h2>
    <h4>{username}</h4>
    {showAddFavButton && !isFav && (
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    )}
  </div>

    
    
  );
};

export default Card;
