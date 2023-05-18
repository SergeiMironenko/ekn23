// Смена div на input при изменении данных
import { useState } from "react";

export default function InputDiv({ value, updateData, disabled }) {
    const [inputValue, setInputValue] = useState(value);
    const [editMode, setEditMode] = useState(false);
    const min = 0, max = 500;
    const style = !disabled ? { borderBottom: "1px dashed black", cursor: "pointer" } : null;

    // Сценарий по клику на другом элементе
    function onBlur() {
        setEditMode(prev => !prev);
        updateData(inputValue);
    }

    // Сценарий при нажатии "esc" или "enter"
    function onKeyDown(e) {
        if (e.keyCode === 27 || e.keyCode === 13) {
            setEditMode(prev => !prev);
            updateData(inputValue);
        }
    }

    // Сценарий при отпускании клавиши
    function onChange(e) {
        if (e.target.value >= min && e.target.value <= max)
            setInputValue(e.target.value);
        else
            alert(`Значение должно быть в диапазоне от ${min} до ${max}`);
    }

    if (editMode)
        return (
            <input
                type="number"
                value={inputValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                autoFocus={true}
                className="form-control"
                style={{ minWidth: 70 }}
            />
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={style}
                    onClick={() => { if (!disabled) setEditMode(prev => !prev) }}
                >
                    {inputValue === null || inputValue === undefined || !inputValue ? "не введено" : inputValue}
                </div>
            </div>
        )
}
