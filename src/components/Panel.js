// Панель выбора студентов
export default function Panel(props) {
    return (
        <div className="" style={{
            backgroundColor: "#f8f9fa",
            padding: 20,
            position: "sticky",
            top: 76
        }}>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}