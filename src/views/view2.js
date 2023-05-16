// Единый контрольный норматив (ЕКН)
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import SelectPanel from '../components/SelectPanel';
import Checkbox from '../components/Checkbox';
import Th from '../components/Th';
import Td from '../components/Td';
import InputDiv from '../components/InputDiv';
import SelectDiv from '../components/SelectDiv';
import Table from '../components/Table';
import Panel from '../components/Panel';


export default function View2({ data, setData, opt, upd }) {
    const [year, setYear] = useState(data.years[0]);
    const [semester, setSemester] = useState(data.semesters[0]);
    const [faculty, setFaculty] = useState(data.faculties[0]);
    const [course, setCourse] = useState(data.courses[0]);
    const [group, setGroup] = useState(data.groups[0]);
    const [onlyNormatives, setOnlyNormatives] = useState(false);
    const [onlySections, setOnlySections] = useState(false);
    const [section] = useState(data.sections[0]);

    // Заглавная часть таблицы
    const tableHead = [
        <tr key={1}>
            <Th rowSpan={2} className="align-top">Студент</Th>
            <Th hide={onlyNormatives} rowSpan={2} className="align-top">Пол</Th>
            <Th hide={onlyNormatives} rowSpan={2} className="align-top">Отделение</Th>
            <Th hide={onlyNormatives} rowSpan={2} className="align-top">Преподаватель</Th>
            <Th colSpan={5} className="align-top">Нормативы</Th>
            <Th colSpan={3} className="align-top">Измерения</Th>
        </tr>,
        <tr key={2}>
            <Th className="align-top">Прыжок в длину (сантиметров)</Th>
            <Th className="align-top">Подъем туловища (раз)</Th>
            <Th className="align-top">Подтягивание (раз)</Th>
            <Th className="align-top">Гибкость (сантиметров)</Th>
            <Th className="align-top">Бег 1000м (секунд)</Th>
            <Th className="align-top">Р.</Th>
            <Th className="align-top">В.</Th>
            <Th className="align-top">И</Th>
        </tr>
    ];

    // Объявление массива студентов, тело таблицы
    const tableBody = data.students
        .map((student, i) => {
            if (
                student.YEAR === year &&
                student.SEMESTER === semester &&
                student.FACULTET === faculty &&
                student.COURSE === course &&
                student.STUDY_GROUP === group &&
                (!onlySections || student.SECTION === section)
            ) return (
                <tr key={i}>
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td
                        hide={onlyNormatives}
                        className="col-md-1"
                    >
                        {student.SEX}
                    </Td>
                    <Td
                        hide={onlyNormatives}
                        className="col-md-1"
                    >
                        <SelectDiv id={i} list={opt(data.sections)} upd={upd("SECTION", i)} value={student.SECTION} />
                    </Td>
                    <Td
                        hide={onlyNormatives}
                        className="col-md-2"
                    >
                        {<SelectDiv id={i} list={opt(data.teachers)} upd={upd("PERSON", i)} value={student.PERSON} />}
                    </Td>
                    <Td>{<InputDiv id={i} upd={upd("Norm1", i)} value={student.Norm1} />}</Td>
                    <Td>{<InputDiv id={i} upd={upd("Norm2", i)} value={student.Norm2} />}</Td>
                    <Td>{<InputDiv id={i} upd={upd("Norm3", i)} value={student.Norm3} />}</Td>
                    <Td>{<InputDiv id={i} upd={upd("Norm4", i)} value={student.Norm4} />}</Td>
                    <Td>{<InputDiv id={i} upd={upd("Norm5", i)} value={student.Norm5} />}</Td>
                    <Td className="col-md-1">{<InputDiv id={i} upd={upd("H", i)} value={student.H} />}</Td>
                    <Td className="col-md-1">{<InputDiv id={i} upd={upd("W", i)} value={student.W} />}</Td>
                    <Td className="col-md-1">{(student.W / (student.H * student.H)).toFixed(4)}</Td>
                </tr>
            )
            else return null;
        })

    const [height, setHeight] = useState(0);
    const refPanel = useRef(null);

    useEffect(() => {
        setHeight(refPanel.current?.clientHeight);
    }, [height]);

    const PanelWithRef = React.createRef((props, ref) => {
        <Panel ref={ref}>
            {props.children}
        </Panel>
    })

    return (
        <div>
            {/* '{height}' */}
            {/* <!-- Панель выбора студентов --> */}
            <Panel>
                {/* Выбор года */}
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    options={opt(data.years)}
                    label="Год"
                />

                {/* Выбор семестра */}
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={semester}
                    onChange={e => setSemester(e.target.value)}
                    options={opt(data.semesters)}
                    label="Семестр"
                />

                {/* Выбор факультета */}
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={faculty}
                    onChange={e => setFaculty(e.target.value)}
                    options={opt(data.faculties)}
                    label="Факультет"
                />

                {/* Выбор курса */}
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                    options={opt(data.courses)}
                    label="Курс"
                />

                {/* Выбор группы */}
                <SelectPanel
                    outerDivClassName="col-sm-auto"
                    value={group}
                    onChange={e => setGroup(e.target.value)}
                    options={opt(data.groups)}
                    label="Группа"
                />

                <div className="col-sm-auto">
                    {/* Чекбокс "Только мое отделение" */}
                    <Checkbox
                        value={onlySections}
                        onChange={() => setOnlySections(value => !value)}
                        label="Только мое отделение"
                    />

                    {/* Чекбокс "Показывать только нормативы" */}
                    <Checkbox
                        value={onlyNormatives}
                        onChange={() => setOnlyNormatives(value => !value)}
                        label="Только нормативы"
                    />
                </div>
            </Panel>

            {/* <!-- Список студентов --> */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}
