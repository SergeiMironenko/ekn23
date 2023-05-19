// Расписание преподавателей
import { useState } from "react"
import Panel from "../components/Panel"
import SelectPanel from "../components/SelectPanel"
import Table from "../components/Table";
import Td from "../components/Th";

export default function View10({ data, getOptions, updateData }) {
    const [teacher, setTeacher] = useState(data.teachers[0]);
    const [section, setSection] = useState(data.sections[0]);

    function someFun() {
        return null;
    }

    const daysPicker =
        <tr key={0}>
            <Td>Дни</Td>
            <Td>
                {data.days.map(day => {
                    const idx = teacher.DAYS.map(item => item.id).indexOf(day.id);
                    if (idx !== -1)
                        return <div
                            className="btn btn-success"
                            style={{ marginRight: 10 }}
                            key={day.id}
                            onClick={
                                () => {
                                    teacher.DAYS.splice(idx, 1);
                                    updateData("teachers", teacher.ID, "DAYS")(teacher.DAYS);
                                }
                            }
                        >
                            {day.value}
                        </div>
                    else
                        return <div
                            className="btn btn-danger"
                            style={{ marginRight: 10 }}
                            key={day.id}
                            onClick={
                                () => {
                                    teacher.DAYS.push(day);
                                    updateData("teachers", teacher.ID, "DAYS")(teacher.DAYS);
                                }
                            }
                        >
                            {day.value}
                        </div>
                })}
            </Td>
        </tr>

    const pairsPicker =
        <tr key={1}>
            <Td>Время</Td>
            <Td>
                {data.pairs.map(pair => {
                    const idx = teacher.PAIRS.map(item => item.id).indexOf(pair.id);
                    if (idx !== -1)
                        return <div
                            className="btn btn-success"
                            style={{ marginRight: 10 }}
                            key={pair.id}
                            onClick={
                                () => {
                                    teacher.PAIRS.splice(idx, 1);
                                    updateData("teachers", teacher.ID, "PAIRS")(teacher.PAIRS);
                                }
                            }
                        >
                            {pair.value}
                        </div>
                    else
                        return <div
                            className="btn btn-danger"
                            style={{ marginRight: 10 }}
                            key={pair.id}
                            onClick={
                                () => {
                                    teacher.PAIRS.push(pair);
                                    updateData("teachers", teacher.ID, "PAIRS")(teacher.PAIRS);
                                }
                            }
                        >
                            {pair.value}
                        </div>
                })}
            </Td>
        </tr>

    return (
        <>
            <Panel>
                <SelectPanel
                    value={teacher}
                    label="Преподаватель"
                    options={getOptions(data.teachers, "FIO")}
                    onChange={e => setTeacher(JSON.parse(e.target.value))}
                />
                <SelectPanel
                    value={section}
                    label="Направление"
                    options={getOptions(data.sections, "value")}
                    onChange={e => setSection(JSON.parse(e.target.value))}
                />
            </Panel>
            <Table
                tbody={[daysPicker, pairsPicker]}
            />
        </>
    )
}
