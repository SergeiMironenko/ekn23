import React from "react";

function Tr(props) {
    if (!props.hide)
        return (
            <tr key={props.key}>
                {props.children}
            </tr>
        )
}

export default Tr;