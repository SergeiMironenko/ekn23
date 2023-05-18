export default function Datepicker(props) {
    return (
        <div className="col-sm-auto">
            <div className="input-group input-group-sm">
                <span className="input-group-text">{props.label}</span>
                <input
                    type="date"
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    className="form-control"
                    style={{ minWidth: 80 }}
                />
            </div>
        </div>
    )
}
