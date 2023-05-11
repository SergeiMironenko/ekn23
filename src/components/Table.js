export default function Table(props) {
    return (
        <table className="table table-sm table-striped table-hover">
            <thead className="table-light"
                style={{ position: "sticky", top: 174 }}
            >
                {props.thead}
                <tr><th
                    style={{ height: 3, padding: 0, backgroundColor: "black" }}
                    colSpan={props.thead?.props?.children?.length || 20}
                ></th></tr>
            </thead>
            <tbody>
                {props.tbody}
            </tbody>
            <tfoot>
                {props.tfoot}
            </tfoot>
        </table>
    )
}
