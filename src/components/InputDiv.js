import { useState } from "react";

// Смена div на input при изменении данных
export default function InputDiv(props) {
    const [value, setValue] = useState(props.value);
    const [idx, setIdx] = useState(0);

    // idx: 0 (div), 1 (input)
    function changeIdx() {
        setIdx(idx => (idx + 1) % 2);
    }

    // Сценарий при нажатии "esc" или "enter"
    function stopFocusOnKey(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            changeIdx();
            props.updateMethod(props.id, value);
        }
    }

    if (idx)
        return (
            <div>
                <input
                    type="number"
                    onBlur={changeIdx}
                    onKeyDown={stopFocusOnKey}
                    onChange={e => setValue(e.target.value)}
                    autoFocus
                    value={value}
                    className="form-control"
                    style={{ minWidth: 70 }}
                />
            </div>
        )
    else
        return <div style={{ display: "flex" }}>
            <div
                style={{ borderBottom: "1px dashed black", cursor: "pointer" }}
                onClick={changeIdx}
            >
                {value}
            </div>
        </div>
}