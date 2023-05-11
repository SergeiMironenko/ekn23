export default function Button(props) {
    return (
        <button
            type="button"
            className={props.className}
            onClick={props.onClick}
            style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem' }}
        >
            {props.value}
        </button>
    )
}
