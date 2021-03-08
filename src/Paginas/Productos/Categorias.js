import React from "react";
import { Link } from "react-router-dom";
import ArticuloNuevo from "../../img/Articulos-Nuevo.jpg";
import Escolares from "../../img/Escolares.jpg";
import FerreteriaEscolar from "../../img/FerreteriaEscolar.jpeg";
import Manualidades from "../../img/Manualidades.jpeg";
import Maqueteria from "../../img/Maqueteria.jpeg";
import Plumavit from "../../img/Plumavit.jpeg";
import Laboratorio from "../../img/Laboratorio.jpeg";
import Varios from "../../img/Varios.jpeg";

function Categorias({ agregarCategoria = (f) => f }) {
  return (
    <section className="categoria">
      <Link
        to={"/productos/bordados"}
        children={<Categoria nombre="bordados" url={ArticuloNuevo} />}
        onClick={() => agregarCategoria("/productos/bordados", "bordados")}
      />
      <Link
        to={"/productos/escolares-jardin"}
        children={<Categoria nombre="escolares-jardin" url={Escolares} />}
        onClick={() => agregarCategoria("/productos/escolares-jardin", "escolares-jardin")}
      />
      <Link
        to={"/productos/ferreteria-escolar"}
        children={<Categoria nombre="ferreteria-escolar" url={FerreteriaEscolar} />}
        onClick={() => agregarCategoria("/productos/ferreteria-escolar", "ferreteria-escolar")}
      />
      <Link
        to={"/productos/manualidades"}
        children={<Categoria nombre="manualidades" url={Manualidades} />}
        onClick={() => agregarCategoria("/productos/manualidades", "manualidades")}
      />
      <Link
        to={"/productos/maqueteria"}
        children={<Categoria nombre="maqueteria" url={Maqueteria} />}
        onClick={() => agregarCategoria("/productos/maqueteria", "maqueteria")}
      />
      <Link
        to={"/productos/mochilas-bolsas"}
        children={<Categoria nombre="mochilas-bolsas" url={Escolares} />}
        onClick={() => agregarCategoria("/productos/mochilas-bolsas", "mochilas-bolsas")}
      />
      <Link
        to={"/productos/plumavit"}
        children={<Categoria nombre="plumavit" url={Plumavit} />}
        onClick={() => agregarCategoria("/productos/plumavit", "plumavit")}
      />
      <Link
        to={"/productos/quimica-laboratorio"}
        children={<Categoria nombre="quimica-laboratorio" url={Laboratorio} />}
        onClick={() => agregarCategoria("/productos/quimica-laboratorio", "quimica-laboratorio")}
      />
      <Link
        to={"/productos/titeres"}
        children={<Categoria nombre="titeres" url={Escolares} />}
        onClick={() => agregarCategoria("/productos/titeres", "titeres")}
      />
      <Link
        to={"/productos/varios"}
        children={<Categoria nombre="varios" url={Varios} />}
        onClick={() => agregarCategoria("/productos/varios", "varios")}
      />
    </section>
  );
}
const Categoria = ({ url = "", nombre = "" }) => {
  return (
    <figure>
      <img src={url} alt="" />
      <figcaption> {nombre} </figcaption>
    </figure>
  );
};
export { Categorias };
