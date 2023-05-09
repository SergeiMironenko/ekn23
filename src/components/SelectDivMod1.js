import { useState } from "react";
import Select from "./Select";

// Смена div на select при изменении данных
export default function SelectDiv(props) {
    const [selectValue, setValue] = useState(props.value);
    const [idx, setIdx] = useState(0);

    // idx: 0 (div), 1 (select)
    function changeIdx() {
        if (!props.value) {
            setIdx(idx => (idx + 1) % 2);
            setValue(props.list[0]);
        }
    }

    // Сценарий при нажатии "esc" или "enter"
    function stopFocusOnKey(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            setIdx(idx => (idx + 1) % 2);
            props.upd?.(selectValue);
        }
        console.log('stop');
    }

    if (idx)
        return (
            <div>
                <Select
                    value={selectValue}
                    onChange={e => setValue(e.target.value)}
                    onBlur={() => { setIdx(idx => (idx + 1) % 2); props.upd?.(selectValue); }}
                    onKeyDown={stopFocusOnKey}
                    autoFocus={true}
                    options={props.list}
                    style={{ "minWidth": 100 }}
                />
            </div>
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: props.value ? "" : "1px dashed black", cursor: "pointer" }}
                    onClick={changeIdx}
                >
                    {props.value || "Записать"}
                </div>
            </div>
        )
}