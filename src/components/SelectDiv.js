import { useState } from "react";
import Select from "./Select";

// Смена div на select при изменении данных
export default function SelectDiv(props) {
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
            props.upd?.(value || "не введено");
        }
    }

    if (idx)
        return (
            <div>
                <Select
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onBlur={() => { changeIdx(); props.upd?.(value || "не введено"); }}
                    onKeyDown={stopFocusOnKey}
                    autoFocus={true}
                    // className="form-control"
                    // style={{ minWidth: 70 }}
                    options={props.list}
                    style={{ "minWidth": 100 }}
                />
            </div>
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: "1px dashed black", cursor: "pointer" }}
                    onClick={changeIdx}
                >
                    {value || "не введено"}
                </div>
            </div>
        )
}