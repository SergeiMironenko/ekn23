// Запись студентов
import { useState } from 'react';
import SelectPanel from '../components/SelectPanel';
import Td from '../components/Td';
import Th from '../components/Th';
import Table from '../components/Table';
import Panel from '../components/Panel';
import SelectDiv from '../components/SelectDiv';
import SelectDivMod1 from '../components/SelectDivMod1';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

export default function View7({ data, getOptions, updateData }) {
    const [semester, setSemester] = useState(data.semesters[0]);
    const [section, setSection] = useState(data.sections[0]);
    const [pair, setPair] = useState(data.pairs[0]);
    const [search, setSearch] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const tableHead =
        <tr>
            <Th>№</Th>
            <Th>День, пара</Th>
            <Th>2-ое занятие</Th>
            <Th>Факультет</Th>
            <Th>Курс</Th>
            <Th>Группа</Th>
            <Th>ФИО</Th>
            <Th hide={checkbox}>Дист.</Th>
            <Th>Пол</Th>
            <Th>Статус</Th>
            <Th>Зачёт</Th>
            <Th>Действия</Th>
            <Th>К.Н. 7</Th>
            <Th>К.Н. 12</Th>
            <Th hide={checkbox}>Оплата</Th>
        </tr>

    // Сравнение значение
    function comp(a, b) {
        if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
    }

    data.students.sort(function (a, b) {
        return comp(a.FACULTET, b.FACULTET) || comp(a.COURSE, b.COURSE) || comp(a.STUDY_GROUP, b.STUDY_GROUP);
    });

    const tableBody = data.students
        .filter(student =>
            student.SEMESTER.id === semester.id
            && student.SECTION.id === section.id
            // && (student.PAIR1 === pair || student.PAIR2 === pair)
            && student.FIO.toLowerCase().match(search.toLowerCase())
        )
        .map((student, i) => {
            return (
                <tr key={student.ID}
                // className={(() => { if (tableBody.length === 0 && false) return "table-danger" })()}
                >
                    <Td className="col-md-1">{i + 1}</Td>
                    <Td className="col-md-1">
                        <SelectDivMod1
                            value={student.PAIR1}
                            prop="value"
                            options={getOptions(data.pairs, "value")}
                            updateData={updateData("students", student.ID, "PAIR1")}
                        />
                    </Td>
                    <Td className="col-md-1">
                        <SelectDivMod1
                            value={student.PAIR2}
                            prop="value"
                            options={getOptions(data.pairs, "value")}
                            updateData={updateData("students", student.ID, "PAIR2")}
                        />
                    </Td>
                    <Td className="col-md-1">{student.FACULTET.value}</Td>
                    <Td className="col-md-1">{student.COURSE.value}</Td>
                    <Td className="col-md-1">
                        <a href={"https://www.nstu.ru/studies/schedule/schedule_classes/schedule?group=" + student.STUDY_GROUP.value}>{student.STUDY_GROUP.value}</a>
                    </Td>
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td hide={checkbox} className="col-md-2">{student.IS_DIST ? "Дист." : "-"}</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">{student.FK_EKN_STATUS.value}</Td>
                    <Td className="col-md-1">
                        <SelectDiv value={student.ZACHET} prop="value" options={getOptions(data.zachets, "value")} updateData={updateData("students", student.ID, "ZACHET")} />
                        {student.PERSON.FIO}
                        <br />
                        {student.ZACHET_DATE}
                    </Td>
                    <Td className="col-md-1">
                        <Button className="btn btn-primary btn-sm" onClick={() => updateData("students", student.ID, "PAIR1")("")} value="Отмена1" />
                        <Button className="btn btn-primary btn-sm" onClick={() => updateData("students", student.ID, "PAIR2")("")} value="Отмена2" />
                    </Td>
                    <Td className="col-md-1">{student.WEEK_MARK_7}</Td>
                    <Td className="col-md-1">{student.WEEK_MARK_12}</Td>
                    <Td hide={checkbox} className="col-md-1">
                        {student.PAY_SUMM}
                        <br />
                        {student.PAY_DATE}
                    </Td>
                </tr>
            )
        })

    const journalAndPrint = //checkbox ? "" :
        <div className="col-sm-1" style={{ display: "block" }}>
            {/* Журнал */}
            <div className="col-sm-1">
                <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_jrn?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                    Журнал
                </a>
            </div>

            {/* Печать */}
            <div className="col-sm-1">
                <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_blank?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                    Печать
                </a>
            </div>
        </div>

    return (
        <div>
            {/* Панель отображения записавшихся студентов и поиска*/}
            <Panel>
                {/* Выбор семестра */}
                <SelectPanel
                    value={semester}
                    label="Семестр"
                    options={getOptions(data.semesters, "value")}
                    onChange={e => setSemester(JSON.parse(e.target.value))}
                />

                {/* Выбор направления (отделения) */}
                <SelectPanel
                    value={section}
                    label="Направление"
                    options={getOptions(data.sections, "value")}
                    onChange={e => setSection(JSON.parse(e.target.value))}
                />

                {/* Выбор пары */}
                <SelectPanel
                    value={pair}
                    label="Пара"
                    options={getOptions(data.pairs, "value")}
                    onChange={e => setPair(e.target.value)}
                />

                {/* Поиск */}
                <div className="col-sm-auto">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text">Поиск по ФИО</span>
                        <Input type="text" className="form-control" onChange={e => setSearch(e.target.value)} />
                    </div>

                    <Checkbox
                        label="Скрыть столбцы"
                        onChange={() => setCheckbox(checkbox => !checkbox)}
                    />
                </div>

                {/* Журнал и печать */}
                {journalAndPrint}
            </Panel>

            {/* Список студентов */}
            <Table
                thead={tableHead}
                tbody={tableBody}
            />
        </div>
    )
}
