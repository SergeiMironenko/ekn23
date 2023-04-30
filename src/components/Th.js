export default function Th(props) {
    if (!props.hide)
        return <th
            className={props.className}
            rowSpan={props.rowSpan}
            colSpan={props.colSpan}
            style={props.style}
        >
            {props.children}
        </th>;
}