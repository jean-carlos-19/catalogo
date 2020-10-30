import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from '../procesos/Peticion';

function Contacto() {

    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(false);

    const cargaImagnes = useCallback(async () => {
        setCargando(true);
        const Imagenes = await logo();
        setImagenes(Imagenes);
        setCargando(false);
    }, []);

    useEffect(() => {
        if (imagenes.length === 0) cargaImagnes();
    }, [imagenes]);


    return (
        <div className="contacto">
            <div>
                <h3>Nuestro objetivo Principal es brindarte un servicio de Calidad.</h3>
                <p>Nos enfocamos en ser un aporte de valor con nuestros productos y brindarte asesoramiento .</p>
            </div>
            <div>
                {
                    (cargando) ? (<div><p>Cargando...</p></div>) : (

                        imagenes.map((elemento) => {
                            return (
                                < img src={`http://localhost:3000/logo/${elemento}`} alt="" />
                            )
                        })
                    )
                }

                <h3>Nilsa Manualidades Escolares</h3>
            </div>
            <div>
                <h3>Accesos Rapidos</h3>
                <ul>
                    <li>
                        <Link to={"/"} children="inicio" />
                    </li>
                    <li>
                        <Link to={"/productos"} children="productos" />
                    </li>
                    <li>
                        <Link to={"/quienes-somos"} children="quienes somos" />
                    </li>
                    <li>
                        <Link to={"/contactanos"} children="contáctanos" />
                    </li>
                </ul>

            </div>
        </div>
    );
}
export { Contacto };
