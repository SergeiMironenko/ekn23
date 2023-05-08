import { useState } from "react"
import { getData, update, show } from "../functions/testdata"

export default function Test({ testData, setTestData }) {
    const lst = testData.main.map((elem, i) => {
        return <div key={i}>{elem.id} : {elem.dt}</div>
    })

    function upd(updVal) {
        return () => setTestData({
            ...testData, main: testData.main.map((elem, i) => {
                if (i === 1) return { ...elem, [updVal]: 'new' }
                else return elem
            })
        })
    }

    return (
        <>
            {lst}
            <br />
            <button onClick={upd("dt")}>
                but
            </button>
        </>
    )
}
