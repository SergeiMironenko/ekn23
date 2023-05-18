// Выпадающий список на панели инструментов
import Select from "./Select";

export default function SelectPanel({ value, label, options, onChange }) {
    return (
        <div className="col-sm-auto">
            <label style={{ marginLeft: 10 }}>{label}</label>
            <div className="col">
                <Select
                    value={JSON.stringify(value)}
                    options={options}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}
