export default function Button(props) {
    return (
        <div className={props.outerDivClassName}>
            <button
                type="button"
                className="btn btn-success"
            >
                {props.value}
            </button>
        </div>
    )
}