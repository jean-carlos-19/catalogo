import React, { useState } from "react";

function useOfrece() {
  const [datos] = useState([
    {
      porcentaje: <h2>100%</h2>,
      titulo: <h3>creatividad</h3>,
      parrafo: (
        <p>
          La <strong>Creatividad</strong> es una de las capacidades humanas más valiosas, nos permite expresarnos,{" "}
          <strong>Soñar</strong> y <strong>Transformar</strong> la <strong>Realidad</strong>
        </p>
      )
    },
    {
      porcentaje: <h2>100%</h2>,
      titulo: <h3>creatividad</h3>,
      parrafo: (
        <p>
          La <strong>Creatividad</strong> es una de las capacidades humanas más valiosas, nos permite expresarnos,{" "}
          <strong>Soñar</strong> y <strong>Transformar</strong> la <strong>Realidad</strong>
        </p>
      )
    },
    {
      porcentaje: <h2>100%</h2>,
      titulo: <h3>creatividad</h3>,
      parrafo: (
        <p>
          La <strong>Creatividad</strong> es una de las capacidades humanas más valiosas, nos permite expresarnos,{" "}
          <strong>Soñar</strong> y <strong>Transformar</strong> la <strong>Realidad</strong>
        </p>
      )
    }
  ]);
  return [datos];
}

export { useOfrece };
