import React, { useEffect, useCallback, useState } from "react";
import { testimonio } from '../../procesos/Peticion';

function Testimonio() {

    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(false);

    const cargaImagnes = useCallback(async () => {
        setCargando(true);
        const Imagenes = await testimonio();
        setImagenes(Imagenes);
        setCargando(false);
    }, []);

    useEffect(() => {
        if(imagenes.length ===0 ) cargaImagnes();
    }, [imagenes]);

    if (cargando) return (<div><p>Cargando...</p></div>);

    return (
        <div className="testimonio">

            <div className="titulo">
                <h3>testimonio de cliente</h3>
            </div>
            <div className="contenedor">
                {
                     imagenes.map((elemento) => {
                        return (
                           
                            <div className="persona">
                            <img src={`http://localhost:3000/testimonio/${elemento}`} alt="" />
                            <h3>jean Carlos</h3>
                            <p>Realizamos nuestra primera compra y nos asesoraron en los artículos, en el
                            tema de envíos son puntuales y los productos llegan bien embalados y en excelentes condiciones.
                        </p>
                        </div>
                        );
                    })
                }
            </div>
            <div>

            </div>

        </div>
    );
}
export { Testimonio };
