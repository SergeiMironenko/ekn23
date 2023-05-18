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

export default function View2({ data, getOptions, updateData }) {
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
        .filter(student =>
            student.YEAR.id === year.id
            && student.SEMESTER.id === semester.id
            && student.FACULTET.id === faculty.id
            && student.COURSE.id === course.id
            && student.STUDY_GROUP.id === group.id
            && (!onlySections || student.SECTION.id === section.id)
        )
        .map(student => {
            return (
                <tr key={student.ID}>
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
                        <SelectDiv
                            value={student.SECTION}
                            prop="value"
                            options={getOptions(data.sections, "value")}
                            updateData={updateData("students", student.ID, "SECTION")}
                        />
                    </Td>
                    <Td
                        hide={onlyNormatives}
                        className="col-md-2"
                    >
                        <SelectDiv
                            value={student.PERSON}
                            prop="FIO"
                            options={getOptions(data.teachers, "FIO")}
                            updateData={updateData("students", student.ID, "PERSON")}
                        />
                    </Td>
                    <Td><InputDiv value={student.Norm1} updateData={updateData("students", student.ID, "Norm1")} /></Td>
                    <Td><InputDiv value={student.Norm2} updateData={updateData("students", student.ID, "Norm2")} /></Td>
                    <Td><InputDiv value={student.Norm3} updateData={updateData("students", student.ID, "Norm3")} /></Td>
                    <Td><InputDiv value={student.Norm4} updateData={updateData("students", student.ID, "Norm4")} /></Td>
                    <Td><InputDiv value={student.Norm5} updateData={updateData("students", student.ID, "Norm5")} /></Td>
                    <Td className="col-md-1"><InputDiv value={student.H} updateData={updateData("students", student.ID, "H")} /> </Td>
                    <Td className="col-md-1"><InputDiv value={student.W} updateData={updateData("students", student.ID, "W")} /></Td>
                    <Td className="col-md-1">{(student.W / (student.H * student.H)).toFixed(4)}</Td>
                </tr>
            )
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
                    value={year}
                    label="Год"
                    options={getOptions(data.years, "value")}
                    onChange={e => setYear(JSON.parse(e.target.value))}
                />

                {/* Выбор семестра */}
                <SelectPanel
                    value={semester}
                    label="Семестр"
                    options={getOptions(data.semesters, "value")}
                    onChange={e => setSemester(JSON.parse(e.target.value))}
                />

                {/* Выбор факультета */}
                <SelectPanel
                    value={faculty}
                    label="Факультет"
                    options={getOptions(data.faculties, "value")}
                    onChange={e => setFaculty(JSON.parse(e.target.value))}
                />

                {/* Выбор курса */}
                <SelectPanel
                    value={course}
                    label="Курс"
                    options={getOptions(data.courses, "value")}
                    onChange={e => setCourse(JSON.parse(e.target.value))}
                />

                {/* Выбор группы */}
                <SelectPanel
                    value={group}
                    label="Группа"
                    options={getOptions(data.groups, "value")}
                    onChange={e => setGroup(JSON.parse(e.target.value))}
                />

                <div className="col-sm-auto">
                    {/* Чекбокс "Только мое отделение" */}
                    <Checkbox
                        value={onlySections}
                        label="Только мое отделение"
                        onChange={() => setOnlySections(value => !value)}
                    />

                    {/* Чекбокс "Показывать только нормативы" */}
                    <Checkbox
                        value={onlyNormatives}
                        label="Только нормативы"
                        onChange={() => setOnlyNormatives(value => !value)}
                    />
                </div>
            </Panel>

            {/* <!-- Список студентов --> */}
            <Table
                thead={tableHead}
                tbody={tableBody}

            />
        </div>
    )
}
