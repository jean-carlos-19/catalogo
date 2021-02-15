import React from 'react';
import { useCategoria } from '../../hooks/useCategoria'
function Categoria() {

    const [categoria] = useCategoria();

    return (
        <div>
            {
                categoria.map((elemento)=>{
                    return(
                        <figure>
                            <img src="" alt=""/>
                            <figcaption>
                                {elemento}
                            </figcaption>
                        </figure>
                    )
                })
            }
        </div>
    );
}