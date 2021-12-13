import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputchange = (e) => {
        setInputValue(e.target.value);
        console.log('HandleInputChange Llamado')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                placeholder="Ingresa una categoria"
                value={inputValue}
                onChange={handleInputchange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
