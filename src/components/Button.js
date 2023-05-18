export default function Button({ value, onClick, className }) {
    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
            style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem' }}
        >
            {value}
        </button>
    )
}
