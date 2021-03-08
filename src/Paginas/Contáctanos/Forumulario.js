import React from "react";
import { useForm } from "react-hook-form";
import { validacion } from "./Validacion";
function Formulario() {
  const { register, handleSubmit } = useForm();
  const { nombre, correo, detalle } = validacion;
  const formulario = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(formulario)} id="formulario">
      <p>
        <input type="text" name="nombre" id="nombre" placeholder="nombre" ref={register(nombre)} />
      </p>
      <p>
        <input type="email" name="correo" id="correo" placeholder="correo" ref={register(correo)} />
      </p>
      <p>
        <textarea name="datelle" id="detalle" cols="30" rows="10" placeholder="mensaje..." ref={register(detalle)}></textarea>
      </p>
      <p>
        <input type="submit" value="enviar" />
      </p>
    </form>
  );
}
export { Formulario };
