export default function Test({ testData, setTestData }) {
    const subelem = Array(15)
        .fill()
        .map(
            (el, i) =>
                <div className="col">
                    Col
                </div>
        );

    const elem = (
        <div className="container text-center">
            <div className="row">
                {subelem}
            </div>
        </div>
    );

    return (
        <>
            {elem}
        </>
    )
}
