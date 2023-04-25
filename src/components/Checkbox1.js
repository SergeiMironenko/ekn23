export default function Checkbox(props) {
    const checkboxFormClassName = "form-check";
    const checkboxInputClassName = "form-check-input";
    const checkboxLabelClassName = "form-check-label";

    return (
        <div className={props.outerDivClassName}>
            <div className={checkboxFormClassName}>
                <input
                    type="checkbox"
                    value={props.children}
                    onChange={props.onChange}
                    className={checkboxInputClassName}
                />
                <label className={checkboxLabelClassName}>
                    {props.label}
                </label>
            </div>
        </div>
    )
}