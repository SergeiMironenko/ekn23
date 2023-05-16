export default function Table(props) {
    return (
        <div
        // className="table-responsive"
        // style={{ "overflowX": "auto" }}
        >
            <table
                className="table table-sm table-striped table-hover"
            // style={{ "width": "100%!important", "overflow": "auto" }}
            >
                <thead className="table-light"
                    style={{ position: "sticky", top: 170.6 }}
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
        </div>
    )
}
