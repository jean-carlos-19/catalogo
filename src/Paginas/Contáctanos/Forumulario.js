import React from "react";

function Formulario() {
  const formulario = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={formulario}>
      <p>
        <input type="text" name="" id="" placeholder="nombre" />
      </p>
      <p>
        <input type="email" name="" id="" placeholder="correo" />
      </p>
      <p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="mensaje..."
        ></textarea>
      </p>
      <p>
        <button>enviar</button>
      </p>
    </form>
  );
}
export { Formulario };
