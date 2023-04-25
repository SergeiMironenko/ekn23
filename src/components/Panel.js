// Панель выбора студентов
export default function Panel(props) {
    return (
        <div className="" >
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}