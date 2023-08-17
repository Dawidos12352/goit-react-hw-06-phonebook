import React from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css"

const Filter = ({filterText, handleFilter}) => {
    
    const handleFilterChange = (event) => {
        handleFilter(event.target.value)
     };




    return (
        <div>
            <label>
                Find contacts by name
                <input
                    className={css.input}
                    type="text"
                    value={filterText}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};

Filter.propTypes = {
    filterText: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
};

export default Filter;