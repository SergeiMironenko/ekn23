export default function Input(props) {
    // Сценарий при нажатии "esc" или "enter"
    function stopFocusOnKey(event) {
        if (event.keyCode === 27 || event.keyCode === 13) {
            event.target?.blur();
        }
    }

    return (
        <input
            type={props.type}
            className={props.className}
            onChange={props.onChange}
            onKeyDown={stopFocusOnKey}
        />
    )
}
