import { useState } from "react";
import Select from "./Select";

// Смена div на select при изменении данных
export default function SelectDiv(props) {
    const [selectValue, setValue] = useState(props.value);
    const [editMode, setEditMode] = useState(false);

    // console.log(props.list, props.upd, props.value);

    // // idx: 0 (div), 1 (select)
    // function changeIdx() {
    //     if (!props.value) {
    //         setIdx(idx => (idx + 1) % 2);
    //         setValue(props.list[0]);
    //     }
    // }

    // Сценарий при клике вне границ выпадающего списка
    function onBlur() {
        setEditMode(prev => !prev);
        props.upd?.(selectValue);
    }

    // Сценарий при нажатии "esc" или "enter"
    function onKeyDown(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            setEditMode(prev => !prev);
            console.log(JSON.parse(event.target.value));
            props.upd?.(JSON.parse(event.target.value));
        }
    }

    if (editMode)
        return (
            <div>
                <Select
                    // value={selectValue}
                    onChange={e => setValue(e.target.value)}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    autoFocus={true}
                    options={props.list}
                // style={{ "minWidth": 100 }}
                />
            </div>
        )
    else
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: props.value ? "" : "1px dashed black", cursor: "pointer" }}
                    onClick={() => { if (!props.value) setEditMode(prev => !prev); }}
                >
                    {props.value || "Записать"}
                </div>
            </div>
        )
}