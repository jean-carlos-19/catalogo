import React, { useState, useCallback, useEffect } from 'react';
import { Peticion } from '../../procesos/Peticion';

function ProductosDestacados() {

    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(false);

    const cargaImagnes = useCallback(async () => {
        setCargando(true);
        const Imagenes = await Peticion();
        setImagenes(Imagenes);
        setCargando(false);
    }, []);

    useEffect(() => {
        if(imagenes.length ===0 ) cargaImagnes();
    }, [imagenes]);

    if (cargando) return (<div><p>Cargando...</p></div>);

    return (
        <div className="productos-destacados">
            <div className="titulo">
                <h3>productos destacados</h3>
            </div>
            <div className="img-productos">
                {
                    imagenes.map((elemento) => {
                        return (
                            <figure>
                                <img src={`http://localhost:3000/imagenes/${elemento}`} alt="" />
                            </figure>
                        );
                    })
                }
            </div>
            <div className="mas-productos">
                <input type="button" value="màs productos" />
            </div>
        </div>
    );
}

export { ProductosDestacados }