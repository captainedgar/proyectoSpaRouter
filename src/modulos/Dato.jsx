import { useParams } from "react-router-dom";
import "../App.css"; // Importa los estilos

function Dato() {
  const rey = useParams(); // Capturamos el parámetro "rey"
  const img = "https://www.html6.es/img/rey_";
  return (
    <div className="dato-container">
      <img src={`${img}${rey.letra.toLowerCase()}`} alt={`Rey ${rey.letra}`} />
      <h2>{rey.letra}</h2>
    </div>
  );
}

export default Dato;
