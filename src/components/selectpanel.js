import Select from "./Select";

// Выпадающий список на панели инструментов
export default function SelectPanel(props) {
    const selectFormClassName = "form-floating";
    const selectClassName = "form-select form-select-sm";

    return (
        <div className={props.outerDivClassName}>
            <div className={selectFormClassName}>
                <Select
                    value={props.value}
                    onChange={props.onChange}
                    className={selectClassName}
                    options={props.options}
                />
                <label>{props.label}</label>
            </div>
        </div>
    )
}