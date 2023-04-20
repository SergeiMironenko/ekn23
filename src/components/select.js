import React from "react";

// Выпадающий список
function Select(props) {
    const selectFormClassName = "form-floating";
    const selectClassName = "form-select form-select-sm";

    return (
        <div className={props.outerDivClassName}>
            <div className={selectFormClassName}>
                <select
                    value={props.value}
                    onChange={props.change}
                    className={selectClassName}
                >
                    {props.dataKey}
                </select>
                <label>{props.label}</label>
            </div>
        </div>
    )
}

export default Select;