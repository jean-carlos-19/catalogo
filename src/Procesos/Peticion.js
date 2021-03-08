import axios from "axios";

async function Peticion() {
  const datos = await axios.get("http://localhost:3000/productos-destacados");
  const { imagenes } = datos.data;
  return imagenes;
}
async function testimonio() {
  const datos = await axios.get("http://localhost:3000/testimonio");
  const { imagenes } = datos.data;
  return imagenes;
}
async function logo() {
  const datos = await axios.get("http://localhost:3000/logo");
  const { imagenes } = datos.data;
  return imagenes;
}
export { Peticion, testimonio, logo };
