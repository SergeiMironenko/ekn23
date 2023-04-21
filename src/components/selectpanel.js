import React from "react";
import Select from "./select";

// Выпадающий список на панели инструментов
function SelectPanel(props) {
    const selectFormClassName = "form-floating";
    const selectClassName = "form-select form-select-sm";

    return (
        <div className={props.outerDivClassName}>
            <div className={selectFormClassName}>
                <Select
                    value={props.value}
                    onChange={props.change}
                    className={selectClassName}
                    options={props.options}
                />
                <label>{props.label}</label>
            </div>
        </div>
    )
}

export default SelectPanel;