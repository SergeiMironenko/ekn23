import React from "react";

// Чекбокс
function Checkbox(props) {
    const checkboxFormClassName = "form-check";
    const checkboxInputClassName = "form-check-input";
    const checkboxLabelClassName = "form-check-label";

    return (
        <div className={props.outerDivClassName}>
            <div className={checkboxFormClassName}>
                <input
                    type="checkbox"
                    value={props.value}
                    onChange={props.onChange}
                    className={checkboxInputClassName}
                />
                <label className={checkboxLabelClassName}>
                    {props.label}
                </label>
            </div>
        </div>
    )
}

export default Checkbox;