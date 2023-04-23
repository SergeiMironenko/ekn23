import React from "react";

// тег таблицы th с параметрами
function Th(props) {
    if (!props.hide)
        return <th
            className={props.className}
            rowSpan={props.rowSpan}
            colSpan={props.colSpan}
        >
            {props.children}
        </th>;
}

export default Th;