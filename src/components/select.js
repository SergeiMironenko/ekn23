import React from "react";

function Select(props) {
    const selectClassName = "form-select form-select-sm";
    return (
        <select
            value={props.value}
            onChange={props.onChange}
            className={selectClassName}
            onBlur={props.onBlur}
            onKeyDown={props.onKeyDown}
            autoFocus={props.autoFocus}
        >
            {props.options}
        </select>
    )
}

export default Select;