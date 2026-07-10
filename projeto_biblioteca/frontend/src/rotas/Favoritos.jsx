/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { getFavoritos } from "../servicos/favoritos";
import { deleteFavorite } from "../../../backend-api/controllers/favoritos";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deletarFavorito(id) {
    await deleteFavorite(id)
    alert("Livro deletado!";)
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);
  return (
    <div className="w-screen h-screen bg-[linear-gradient(90deg,#002F52_35%,#326589_165%)]">
      <h1 className="text-white text-[36px] text-center w-full pt-[85px]">Meus Favoritos</h1>
      <div>
        {favoritos.map( favorito => (
          <p onClick={deleteFavorite(favorito.id)} className="text-white">{favorito.nome}</p>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
