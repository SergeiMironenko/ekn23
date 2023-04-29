// Панель выбора студентов
export default function Panel(props) {
    return (
        <div className="panel" >
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}