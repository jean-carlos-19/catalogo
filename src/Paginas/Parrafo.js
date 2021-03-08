import React from "react";
import PropTypes from "prop-types";
function Parrafo({ parrafo = "" }) {
  return (
    <div>
      <p> {parrafo} </p>
    </div>
  );
}
Parrafo.propTypes = {
  parrafo: PropTypes.string.isRequired
};
export { Parrafo };
