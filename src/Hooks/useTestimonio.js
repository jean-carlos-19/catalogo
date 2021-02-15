import { useState } from "react";
function useTestimonio() {
  const [imagenes] = useState([
    `http://localhost:3000/img/cliente.png`,
    `http://localhost:3000/img/cliente.png`,
    `http://localhost:3000/img/cliente.png`,
  ]);
  return [imagenes];
}
export { useTestimonio };
