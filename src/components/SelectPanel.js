import Select from "./Select";

// Выпадающий список на панели инструментов
export default function SelectPanel(props) {
    return (
        <div className={props.outerDivClassName}>
            <label style={{ marginLeft: 10 }}>{props.label}</label>
            <div className="col">
                <Select
                    value={props.value}
                    onChange={props.onChange}
                    options={props.options}
                />
            </div>
        </div>
    )
}
