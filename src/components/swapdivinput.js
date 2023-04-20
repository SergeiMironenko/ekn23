import React from "react";

// Смена div на input при изменении данных
class SwapDivInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
            value: this.props.value,
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

    render() {
        if (this.state.idx)
            return <input
                type="text"
                onBlur={this.changeElem}
                onKeyDown={this.stopFocusOnKey}
                onChange={this.handleChange}
                autoFocus
                value={this.state.value}
            />
        else
            return <div onClick={this.changeElem}>{this.state.value}</div>
    }
}

export default SwapDivInput;