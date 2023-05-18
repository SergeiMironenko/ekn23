// Смена div на select при изменении данных
import { useState } from "react";
import Select from "./Select";

export default function SelectDiv({ value, prop, options, updateData }) {
    const [selectValue, setSelectValue] = useState(JSON.stringify(value));
    const [editMode, setEditMode] = useState(false);

    // Сценарий при клике на другом объекте
    function onBlur() {
        setEditMode(prev => !prev);
        updateData(JSON.parse(selectValue));
    }

    // Сценарий при нажатии "esc" или "enter"
    function onKeyDown(e) {
        if (e.keyCode === 27 || e.keyCode === 13) {
            setEditMode(prev => !prev);
            updateData(JSON.parse(selectValue));
        }
    }

    function onChange(e) {
        setSelectValue(e.target.value);
    }

    if (editMode)
        return (
            <Select
                value={selectValue}
                options={options}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                autoFocus={true}
            />
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: "1px dashed black", cursor: "pointer" }}
                    onClick={() => { setEditMode(prev => !prev); }}
                >
                    {value[prop] || "не введено"}
                </div>
            </div>
        )
}
