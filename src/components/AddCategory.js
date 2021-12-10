import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputchange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue,...categories]);
        }
     };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Ingresa una categoria"
                value={inputValue}
                onChange={handleInputchange}
            ></input>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };

export default AddCategory;
