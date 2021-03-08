import React, { useState } from "react";

function useQuienesSomos() {
  const [parrafos] = useState([
    {
      parrafo: (
        <p>
          Al darnos cuenta que no existía material de ayuda a los educadores, Papás y Alumnos en etapa escolar, es ahi donde
          creamos Manualidades Escolares Nilsa.
        </p>
      )
    },
    {
      parrafo: (
        <p>
          Con los años nuestra empresa ha ido creciendo incorporando un amplio surtido en artículos para el aprendizaje.
          Rompecabezas, Armados de Laboratorio de Química, Plumavit, Manualidades, Cordonería, Títeres, Instrumentos Musicales,
          Etc. Nos han asesorado Profesores de Educación
        </p>
      )
    },
    {
      parrafo: (
        <p>
          Básica y Parvulario, quienes nos han dado ideas para seguir implementando materiales de apoyo a través de los años.
          Convirtiéndonos en un Aliado importantes dentro del desarrollo Académico y Personal de Alumnos y Educadores
        </p>
      )
    }
  ]);
  return [parrafos];
}
export { useQuienesSomos };
