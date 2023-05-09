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

export default function View7({ data, setData }) {
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

    // Получение списка для select
    function opt(list) {
        return list.map((elem, i) => {
            return <option key={i}>{elem}</option>
        })
    }

    // Обновление значений
    function upd(updKey, i) {
        return (updValue) => {
            setData({
                ...data, students: data.students.map((item, idx) => {
                    if (idx === i) return { ...item, [updKey]: updValue };
                    else return item;
                })
            })
        }
    }

    data.students.sort(function (a, b) {
        return comp(a.FACULTET, b.FACULTET) || comp(a.COURSE, b.COURSE) || comp(a.STUDY_GROUP, b.STUDY_GROUP);
    });

    const tableBody = data.students.map((student, i) => {
        if (
            student.FIO.toLowerCase().match(search.toLowerCase()) &&
            student.SEMESTER === semester &&
            student.SECTION === section
            // (student.PAIR1 === pair || student.PAIR2 === pair)
        ) return (
            <tr key={i}
            // className={(() => { if (tableBody.length === 0 && false) return "table-danger" })()}
            >
                <Td className="col-md-1">{i + 1}</Td>
                <Td className="col-md-1">
                    <SelectDivMod1 id={i} list={opt(data.pairs)} upd={upd("PAIR1", i)} value={student.PAIR1} />
                </Td>
                <Td className="col-md-1">
                    <SelectDivMod1 id={i} list={opt(data.pairs)} upd={upd("PAIR2", i)} value={student.PAIR2} />
                </Td>
                <Td className="col-md-1">{student.FACULTET}</Td>
                <Td className="col-md-1">{student.COURSE}</Td>
                <Td className="col-md-1">
                    <a href={"https://www.nstu.ru/studies/schedule/schedule_classes/schedule?group=" + student.STUDY_GROUP}>{student.STUDY_GROUP}</a>
                </Td>
                <Td className="col-md-2">{student.FIO}</Td>
                <Td hide={checkbox} className="col-md-2">{student.IS_DIST ? "Дист." : "-"}</Td>
                <Td className="col-md-1">{student.SEX}</Td>
                <Td className="col-md-1">{student.FK_EKN_STATUS}</Td>
                <Td className="col-md-1">
                    <SelectDiv id={i} list={opt(data.zachets)} upd={upd("ZACHET", i)} value={student.ZACHET} />
                    {student.PERSON}
                    <br />
                    {student.ZACHET_DATE}
                </Td>
                {/* <td className="col-md-1">11 x.LETTER 22</td> */}
                <Td className="col-md-1">
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => upd("PAIR1", i)("")}>Отмена1</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => upd("PAIR2", i)("")}>Отмена2</button>
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
        else return null;
    })

    const journalAndPrint = checkbox ? "" :
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
                    outerDivClassName="col-sm-2"
                    value={semester}
                    onChange={e => setSemester(e.target.value)}
                    options={opt(data.semesters)}
                    label="Семестр"
                />

                {/* Выбор направления (отделения) */}
                <SelectPanel
                    outerDivClassName="col-sm-2"
                    value={section}
                    onChange={e => setSection(e.target.value)}
                    options={opt(data.sections)}
                    label="Направление"
                />

                {/* Выбор пары */}
                <SelectPanel
                    outerDivClassName="col-sm-2"
                    value={pair}
                    onChange={e => setPair(e.target.value)}
                    options={opt(data.pairs)}
                    label="Пара"
                />

                {/* Поиск */}
                <div className="col-sm-4">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text">Поиск по ФИО</span>
                        {/* <input type="text" class="form-control" onChange={e => setSearch(e.target.value)} /> */}
                        <Input type="text" className="form-control" onChange={e => setSearch(e.target.value)} />
                    </div>

                    <Checkbox
                        value={checkbox}
                        onChange={() => setCheckbox(checkbox => !checkbox)}
                        label="Скрыть столбцы"
                    />
                </div>

                {/* Журнал и печать */}
                {journalAndPrint}
            </Panel>

            {/* Список студентов */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}