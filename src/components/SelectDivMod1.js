// Смена div на select при изменении данных
// Mod1 - изменить можно только один раз, отменять через кнопку
import { useState } from "react";
import Select from "./Select";

export default function SelectDiv({ value, prop, options, updateData }) {
    const [editMode, setEditMode] = useState(false);

    // Сценарий при нажатии "esc" или "enter"
    function onKeyDown(e) {
        if (e.keyCode === 27 || e.keyCode === 13) {
            setEditMode(prev => !prev);
        }
    }

    if (editMode)
        return (
            <Select
                value={JSON.stringify(value)}
                options={options}
                onChange={e => updateData(JSON.parse(e.target.value))}
                onBlur={() => setEditMode(prev => !prev)}
                onKeyDown={onKeyDown}
                autoFocus={true}
            />
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: value ? "" : "1px dashed black", cursor: "pointer" }}
                    onClick={() => { if (!value) setEditMode(prev => !prev); }}
                >
                    {value[prop] || "Записать"}
                </div>
            </div>
        )
}