import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  //setInputValue es la accion que le vamos a aplicar al inputValue
  //useState tiene dos estados, el que nosotros le damos y la accion
  //el valor de inputValue es un String vacio
  const handleInputChange = (e) => {
    //e de evento
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit hecho");

    if (inputValue.trim().length > 2) {
      //trim borra los espacios
      //si los caracteres es mayor a 2 entonces podemos ejecutar la accion
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue(""); //despues de hacer enter el value es vacio y podemos escribir lo que queramos
    } else {
      alert("Debe tener mas de dos caracteres");
    }
    //cats hace referencia a categorias, y despues de la coma va el valor que nosotros le indicamos
    //pero si el valor lo ponemos antes de los puntos, iran primeros
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
