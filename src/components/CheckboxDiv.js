import { useState } from "react";
import Checkbox from "./Checkbox";

// Смена div на select при изменении данных
export default function CheckboxDiv(props) {
    const [value, setValue] = useState(props.value);
    const [idx, setIdx] = useState(1);

    // idx: 0 (div), 1 (input)
    function changeIdx() {
        setIdx(idx => (idx + 1) % 2);
        if (props.updateMethod) props.updateMethod(props.id, value);
    }

    // Сценарий при нажатии "esc" или "enter"
    // function stopFocusOnKey(event) {
    //     if (event.keyCode === 27 || event.keyCode === 13) {
    //         changeIdx();
    //     }
    // }

    if (idx)
        return (
            <div>
                <Checkbox
                    onChange={() => setValue(value => { props.updateMethod(props.id, !value); return !value })}
                    label="Спортсмен"
                    value={value}
                />
                {/* <Select
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onBlur={changeIdx}
                    onKeyDown={stopFocusOnKey}
                    autoFocus={true}
                    // className="form-control"
                    // style={{ minWidth: 70 }}
                    options={props.list}
                    style={{ "minWidth": 100 }}
                /> */}
            </div>
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: "1px dashed black", cursor: "pointer" }}
                    onClick={changeIdx}
                >
                    {value}
                </div>
            </div>
        )
}