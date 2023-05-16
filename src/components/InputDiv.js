import { useState } from "react";

// Смена div на input при изменении данных
export default function InputDiv(props) {
    const [value, setValue] = useState(props.value);
    const [idx, setIdx] = useState(0);
    const style = props.disabled ? null : { borderBottom: "1px dashed black", cursor: "pointer" };
    const min = 0, max = 50;

    // idx: 0 (div), 1 (input)
    function changeIdx() {
        setIdx(idx => (idx + 1) % 2);
    }

    // Сценарий при нажатии "esc" или "enter"
    function stopFocusOnKey(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            changeIdx();
            props.upd?.(value || "не введено");
        }
    }

    // Сценарий при отпускании клавиши
    function onChange(e) {
        if (e.target.value >= min && e.target.value <= max)
            setValue(e.target.value);
        else
            alert(`Значение должно быть в диапазоне от ${min} до ${max}`);
    }

    return (
        idx ?
            <div>
                <input
                    type="number"
                    onBlur={changeIdx}
                    onKeyDown={stopFocusOnKey}
                    onChange={onChange}
                    autoFocus={true}
                    value={value}
                    className="form-control"
                    style={{ minWidth: 70 }}
                />
            </div>
            :
            <div style={{ display: "flex" }}>
                <div
                    style={style}
                    onClick={() => { if (!props.disabled) changeIdx() }}
                >
                    {value || "не введено"}
                </div>
            </div>
    )
}
