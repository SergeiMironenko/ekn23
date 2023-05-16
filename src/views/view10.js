// Расписание преподавателей
import { useState } from "react"
import Panel from "../components/Panel"
import SelectPanel from "../components/SelectPanel"
import Select from "../components/Select";
import Table from "../components/Table";
import Td from "../components/Th";

export default function View10({ data, setData, opt, upd }) {
    const [teacher, setTeacher] = useState(data.teachers[0].FIO);
    const [section, setSection] = useState(data.sections[0]);

    const daysPicker = data.teachers.map((t, i) => {
        if (t.FIO === teacher) {
            t.DAYS.sort((x, y) => x.id - y.id);
            return (
                <tr key={0}>
                    <Td>Дни</Td>
                    <Td>
                        {data.days.map((day, dayIdx) => {
                            if (t.DAYS.indexOf(day) !== -1)
                                return <div
                                    className="btn btn-success"
                                    style={{ marginRight: 10 }}
                                    key={dayIdx}
                                    onClick={
                                        () => {
                                            t.DAYS.splice(t.DAYS.indexOf(day), 1);
                                            upd("DAYS", i, "teachers")(t.DAYS);
                                        }
                                    }
                                >
                                    {day.value}
                                </div>
                            else
                                return <div
                                    className="btn btn-danger"
                                    style={{ marginRight: 10 }}
                                    key={dayIdx}
                                    onClick={
                                        () => {
                                            t.DAYS.push(day);
                                            upd("DAYS", i, "teachers")(t.DAYS);
                                        }
                                    }
                                >
                                    {day.value}
                                </div>
                        })}
                    </Td>
                </tr>
            )
        }
        else return null
    })

    const pairsPicker = data.teachers.map((t, i) => {
        if (t.FIO === teacher) {
            t.PAIRS.sort((x, y) => x.id - y.id);
            return (
                <tr key={0}>
                    <Td>Время</Td>
                    <Td>
                        {data.pairs.map((pair, pairIdx) => {
                            if (t.PAIRS.indexOf(pair) !== -1)
                                return <div
                                    className="btn btn-success"
                                    style={{ marginRight: 10 }}
                                    key={pairIdx}
                                    onClick={
                                        () => {
                                            t.PAIRS.splice(t.PAIRS.indexOf(pair), 1);
                                            upd("PAIRS", i, "teachers")(t.PAIRS);
                                        }
                                    }
                                >
                                    {pair.value}
                                </div>
                            else
                                return <div
                                    className="btn btn-danger"
                                    style={{ marginRight: 10 }}
                                    key={pairIdx}
                                    onClick={
                                        () => {
                                            t.PAIRS.push(pair);
                                            upd("PAIRS", i, "teachers")(t.PAIRS);
                                        }
                                    }
                                >
                                    {pair.value}
                                </div>
                        })}
                    </Td>
                </tr>
            )
        }
        else return null
    })

    return (
        <>
            <Panel>
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={teacher}
                    onChange={e => setTeacher(e.target.value)}
                    options={opt(data.teachers, "FIO")}
                    label="Преподаватель"
                />
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={section}
                    onChange={e => setSection(e.target.value)}
                    options={opt(data.sections)}
                    label="Направление"
                />
            </Panel>
            <Table tbody={[daysPicker, pairsPicker]} />
        </>
    )
}
