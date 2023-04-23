import React from "react";

// Панель выбора студентов
function Panel(props) {
    return (
        <div className="" >
            <div className="row">
                {props.children}
            </div>
        </div>
    )

}

export default Panel;