import { useState } from "react";

export default function Test({ testData, setTestData }) {
    const subelem = Array(15)
        .fill()
        .map(
            (el, i) =>
                <div key={i} className="col">
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

    const [value, setValue] = useState("");

    function onKeyDown(e) {
        // console.log(`keyDown; ${e.target.value}, ${value}`);
        // console.log(typeof ());
    }

    function onKeyUp(e) {
        // console.log(`keyUp; ${e.target.value}`);
    }

    return (
        <>
            {elem}
            {/* <button onClick={() => { alert("ppp") }}>but</button> */}
            <input
                type="number"
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                value={value}
                onChange={(e) => { if (e.target.value < 100) setValue(e.target.value); else console.log('if'); }}
            />
        </>
    )
}
