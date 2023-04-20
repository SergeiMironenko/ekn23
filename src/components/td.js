import React from "react"

// тег таблицы td с параметрами
function Td(props) {
    if (props.show)
        return <td
            className={props.className}
        >
            {props.value}
        </td>
}

export default Td;