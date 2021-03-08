import { useState, useEffect } from "react";

function useLista(nuevaclase = "") {
  const [classCss, establecerClassCss] = useState(undefined);

  useEffect(() => {
    if (nuevaclase) {
      establecerClassCss("lista");
      return;
    }
    const nuevo = `${classCss} activado`;
    establecerClassCss(nuevo);
  }, [nuevaclase]);
  return [classCss];
}
export { useLista };
