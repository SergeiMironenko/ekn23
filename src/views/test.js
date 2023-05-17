// Тест
import { useState } from "react";

export default function Test({ testData, setTestData }) {
    const obj = [{ id: 2, val: "door" }, { id: 5, val: "tree" }, { id: 7, val: "door" }];
    console.log(obj[1].val);
    const [current, setCurrent] = useState(obj[0]);

    function selectChange(e) {
        const tmp = JSON.parse(e.target.value);
        console.log(tmp);
        setCurrent(JSON.parse(e.target.value));
    }

    const sel = (
        <select onChange={selectChange}>
            {obj.map((item, i) => <option key={i} value={JSON.stringify(item)} label={item.val + item.id} />)}
        </select>
    )

    return (
        <>
            {sel}
            <div>{`current = ${current.val} (${current.id})`}</div>
        </>
    )
}
