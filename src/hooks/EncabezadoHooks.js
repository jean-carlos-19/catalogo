import React, { useState, useEffect } from "react";

const useEncabezado = () => {

    const [PaginaActual, setPaginaActual] = useState({ pagina: "inicio", classPagina: "foco", });
    const [subMenu, setSubMenu] = useState({ classSubMenu: "subMenuApagado", activo: false });
    const items = ["articulos nuevos", "escolares-jardin", "ferreteria-escolar", "manualidades", "maqueterias", "mochilas y bolsas", "plumavit", "quimica-laboratorio", "titeres", "varios"];
    
    const [paginas] = useState([
        { pagina: "inicio", url: "/", subMenu: [] },
        { pagina: "productos", url: "/productos", subMenu: items },
        { pagina: "quienes somos", url: "/quienes-somos", subMenu: [] },
        { pagina: "contàctanos", url: "/contactanos", subMenu: [] },
    ]);

    const cambiaPagina = (paginaSeleccionada = "sin parametro") => {
        
        setPaginaActual({ pagina: paginaSeleccionada, classPagina: "foco" });

    };
    useEffect(()=>{

        if (PaginaActual.pagina === "productos" && !subMenu.activo) {
            setSubMenu({ classSubMenu: "subMenu", activo: true })
        }else{
            setSubMenu({ classSubMenu: "subMenuApagado", activo: false })
        }
    },[PaginaActual])

    return [PaginaActual, paginas, cambiaPagina, subMenu]

}
export { useEncabezado }