import { useState } from "react";

const useLogo = (estado, apareceMenu = (f) => f) => {
  const [menu, establcerMenu] = useState(estado);
  const click = () => {
    apareceMenu(menu);
    establcerMenu(!menu);
  };

  return [menu, click];
};
export { useLogo };
