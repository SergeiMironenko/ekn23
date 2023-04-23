import React from "react"

// тег таблицы td с параметрами
function Td(props) {
    if (!props.hide)
        return <td
            className={props.className}
            rowSpan={props.rowSpan}
            colSpan={props.colSpan}
        >
            {props.children}
        </td>
}

export default Td;