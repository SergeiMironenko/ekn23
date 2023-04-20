import React from "react";

// тег таблицы th с параметрами
function Th(props) {
    if (props.show)
        return <th
            className={props.className}
            rowSpan={props.rowSpan}
            colSpan={props.colSpan}
        >
            {props.value}
        </th>;
}

export default Th;