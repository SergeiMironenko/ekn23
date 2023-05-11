export default function Select(props) {
    return (
        <select
            value={props.value}
            onChange={props.onChange}
            className="form-select form-select-sm"
            onBlur={props.onBlur}
            onKeyDown={props.onKeyDown}
            autoFocus={props.autoFocus}
            style={props.style}
        >
            {props.options}
        </select>
    )
}
