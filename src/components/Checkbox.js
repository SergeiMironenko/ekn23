export default function Checkbox(props) {
    const checkboxFormClassName = "form-check";
    const checkboxInputClassName = "form-check-input";
    const checkboxLabelClassName = "form-check-label";

    return (
        <div className={props.outerDivClassName}>
            <div className={checkboxFormClassName}>
                <input
                    type="checkbox"
                    onChange={props.onChange}
                    className={checkboxInputClassName}
                    checked={props.value}
                />
                <label className={checkboxLabelClassName}>
                    {props.label}
                </label>
            </div>
        </div>
    )
}
