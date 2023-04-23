import React from "react";
import Select from "./select";

// Смена div на select при изменении данных
class SelectDiv extends React.Component {
    constructor(props) {
        super(props);
        // elemIdx: 0 (div), 1 (select)
        this.state = {
            elemIdx: 0,
            value: '',
        }
        this.changeElem = this.changeElem.bind(this);
        this.stopFocusOnKey = this.stopFocusOnKey.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // select <-> div
    changeElem(event) {
        this.setState((state, props) => ({
            elemIdx: (state.elemIdx + 1) % 2,
        }))
    }

    // select -> div при нажатии 'esc' или 'enter'
    stopFocusOnKey(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            this.changeElem(event);
            this.props.studentsChange(this.state.value);
        }
    }

    // Изменение выбранного значения
    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    // Установка первого значения списка по умолчанию
    componentDidMount() {
        if (this.props.list && this.props.list.length > 0) {
            this.setState({
                value: this.props.list[0],
            })
        }
    }

    render() {
        if (this.state.elemIdx)
            return <div>
                <Select
                    onBlur={this.changeElem}
                    onKeyDown={this.stopFocusOnKey}
                    onChange={this.handleChange}
                    autoFocus={true}
                    // value={this.state.value}
                    // className="form-control"
                    // style={{ minWidth: 70 }}
                    options={this.props.list}
                />
            </div>
        else
            return <div style={{ display: "flex" }}>
                <div
                    style={{ borderBottom: "1px dashed black" }}
                    onClick={this.changeElem}
                >
                    {this.state.value}
                </div>
            </div>
    }
}

export default SelectDiv;