export default function Table(props) {
    return (
        <table className="table table-sm table-striped table-hover">
            <thead className="table-light">
                {props.thead}
            </thead>
            <tbody className="table-group-divider">
                {props.tbody}
            </tbody>
            <tfoot>
                {props.tfoot}
            </tfoot>
        </table>
    )
}