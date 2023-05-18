export default function Checkbox({ value, label, onChange }) {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                onChange={onChange}
                className="form-check-input"
                checked={value}
            />
            <label className="form-check-label">
                {label}
            </label>
        </div>
    )
}
