import React from "react";
import Select from "./select";

// Смена div на select при изменении данных
class SwapDivSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
            value: '',
        }
        this.changeElem = this.changeElem.bind(this);
        this.stopFocusOnKey = this.stopFocusOnKey.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeElem(event) {
        this.setState((state, props) => ({
            idx: (state.idx + 1) % 2,
        }))
    }

    stopFocusOnKey(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            this.changeElem(event);
            this.props.studentsChange(this.state.value);
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    componentDidMount() {
        if (this.props.list && this.props.list.length > 0) {
            this.setState({
                value: this.props.list[0],
            })
        }
    }

    render() {
        // console.log(this.props.list);
        if (this.state.idx)
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

export default SwapDivSelect;