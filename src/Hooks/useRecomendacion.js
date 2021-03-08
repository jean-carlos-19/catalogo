import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function useRecomendacion() {
  const [redesSociales] = useState([
    <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank" children={<FaFacebook />} />,
    <Link to={{ pathname: "https://twitter.com/?lang=es" }} target="_blank" children={<FaTwitter />} />,
    <Link to={{ pathname: "https://www.instagram.com/?hl=es-la" }} target="_blank" children={<FaInstagram />} />
  ]);
  return [redesSociales];
}
export { useRecomendacion };
