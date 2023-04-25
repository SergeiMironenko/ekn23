import { useState } from 'react';
import * as st from '../functions/data';
import SelectPanel from '../components/SelectPanel';
import Checkbox from '../components/Checkbox';
import Th from '../components/Th';
import Td from '../components/Td';
import InputDiv from '../components/InputDiv';
import SelectDiv from '../components/SelectDiv';
import Table from '../components/Table';
import Panel from '../components/Panel';


export default function View2(props) {
    const [data] = useState(st.getData());
    const [year, setYear] = useState(data.years[0].NAME);
    const [semester, setSemester] = useState(data.semesters[0].NAME);
    const [faculty, setFaculty] = useState(data.faculties[0].id);
    const [course, setCourse] = useState(data.courses[0].NAME);
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
    let tableBody = Array(0);

    // Заполнение массива студентов
    data.students.forEach((student, i) => {
        if (student.FACULTET === faculty &&
            student.COURSE === course &&
            student.STUDY_GROUP === group &&
            (!onlySections || student.SECTION === section)) {
            tableBody.push(
                // ng-context-menu="menuStudents"
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
                        {<SelectDiv id={i} list={data.sectionsOptions} updateMethod={st.updateStudentSection}>{student.SECTION}</SelectDiv>}
                    </Td>
                    <Td
                        hide={onlyNormatives}
                        className="col-md-2"
                    >
                        {<SelectDiv id={i} list={data.teachersOptions} updateMethod={st.updateStudentTeacher}>{student.PERSON}</SelectDiv>}
                    </Td>
                    <Td
                        className="col-md-1"
                    // ng-if="!(x.SHOW_PRESS == 0 && n.PK == 2) && ! (x.SHOW_PODT == 0 && n.PK == 3)"
                    >
                        {<InputDiv id={i} updateMethod={st.updateStudentNorm1}>{student.Norm1}</InputDiv>}
                    </Td>
                    <Td>{<InputDiv id={i} updateMethod={st.updateStudentNorm2}>{student.Norm2}</InputDiv>}</Td>
                    <Td>{<InputDiv id={i} updateMethod={st.updateStudentNorm3}>{student.Norm3}</InputDiv>}</Td>
                    <Td>{<InputDiv id={i} updateMethod={st.updateStudentNorm4}>{student.Norm4}</InputDiv>}</Td>
                    <Td>{<InputDiv id={i} updateMethod={st.updateStudentNorm5}>{student.Norm5}</InputDiv>}</Td>
                    <Td className="col-md-1">{<InputDiv id={i} updateMethod={st.updateStudentH}>{student.H}</InputDiv>}</Td>
                    <Td className="col-md-1">{<InputDiv id={i} updateMethod={st.updateStudentW}>{student.W}</InputDiv>}</Td>
                    <Td className="col-md-1">{(student.W / (student.H * student.H)).toFixed(4)}</Td>
                </tr>
            );
        }
    });

    return (
        <div>
            {/* <!-- Панель выбора студентов --> */}
            <Panel>
                {/* Выбор года */}
                <SelectPanel
                    outerDivClassName="col-sm-1"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    options={data.yearsOptions}
                    label="Год"
                />

                {/* Выбор семестра */}
                <SelectPanel
                    outerDivClassName="col-sm-2"
                    value={semester}
                    onChange={e => setSemester(e.target.value)}
                    options={data.semestersOptions}
                    label="Семестр"
                />

                {/* Выбор факультета */}
                <SelectPanel
                    outerDivClassName="col-sm-1"
                    value={faculty}
                    onChange={e => setFaculty(e.target.value)}
                    options={data.facultiesOptions}
                    label="Факультет"
                />

                {/* Выбор курса */}
                <SelectPanel
                    outerDivClassName="col-sm-1"
                    value={course}
                    onChange={e => setCourse(e.target.value)}
                    options={data.coursesOptions}
                    label="Курс"
                />

                {/* Выбор группы */}
                <SelectPanel
                    outerDivClassName="col-sm-1"
                    value={group}
                    onChange={e => setGroup(e.target.value)}
                    options={data.groupsOptions}
                    label="Группа"
                />

                {/* Чекбокс "Только мое отделение" */}
                <Checkbox
                    outerDivClassName="col-sm-2"
                    onChange={() => setOnlySections(value => !value)}
                    label="Только мое отделение"
                >
                    {onlySections}
                </Checkbox>

                {/* Чекбокс "Показывать только нормативы" */}
                <Checkbox
                    outerDivClassName="col-sm-2"
                    onChange={() => setOnlyNormatives(value => !value)}
                    label="Показывать только нормативы"
                >
                    {onlyNormatives}
                </Checkbox>
            </Panel>

            {/* <!-- Список студентов --> */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}