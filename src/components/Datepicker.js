export default function Datepicker(props) {
    return (
        <div className={props.outerDivClassName}>
            <div className="input-group input-group-sm">
                <span className="input-group-text">{props.label}</span>
                <input
                    disabled={props.disabled}
                    type="date"
                    className="form-control"
                    style={{ minWidth: 80 }}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}
