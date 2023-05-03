import { useState } from 'react';
import Panel from '../components/Panel';
import Table from '../components/Table';
import Th from '../components/Th';
import Td from '../components/Td';
import SelectPanel from '../components/SelectPanel';
import Checkbox from '../components/Checkbox';
import * as st from '../functions/data';
import SelectDiv from '../components/SelectDiv';
import Datepicker from '../components/Datepicker';
import Button from '../components/Button';
import CheckboxDiv from '../components/CheckboxDiv';

export default function View6(props) {
    const [data] = useState(st.getData());
    const [year, setYear] = useState(data.years[0].NAME);
    const [semester, setSemester] = useState(data.semesters[0].NAME);
    const [faculty, setFaculty] = useState(data.faculties[0].id);
    const [course, setCourse] = useState(data.courses[0].NAME);
    const [group, setGroup] = useState(data.groups[0]);
    const [onlySportsmen, setOnlySportsmen] = useState(false);
    const [zach, setZach] = useState("2017-06-01");

    const tableHead = [
        <tr key={1}>
            <Th className="align-top" rowSpan="3">Студент</Th>
            <Th className="align-top" rowSpan="3">Пол</Th>
            <Th className="align-top" rowSpan="3">Отделение</Th>
            <Th className="align-top" rowSpan="3">Преподаватель</Th>
            <Th className="align-top" rowSpan="3">Статус</Th>
            <Th className="align-top" rowSpan="1">1 этап</Th>
            {/* ng-if="show_oral" */}
            <Th rowSpan="1" colspan="2">2 этап</Th>
            {/* ng-if="!show_oral" */}
            <Th className="align-top" rowSpan="1">2 этап</Th>
            <Th className="align-top" rowSpan="1">3 этап</Th>
            <Th className="align-top" rowSpan="1">4 этап</Th>
            <Th className="align-top" rowSpan="3">Зачтено</Th>
            {/* ng-if="false" */}
            <Th className="align-top" rowSpan="3">Дата</Th>
            <Th className="align-top" rowSpan="3">Деканат</Th>
            <Th className="align-top" rowSpan="3">Сам. работа</Th>
        </tr>,
        <tr key={2}>
            <Th className="align-top" rowSpan="2">Анкеты</Th>
            {/* ng-if="show_oral" */}
            <Th className="align-top" colSpan="2">Тест</Th>
            {/* ng-if="!show_oral" */}
            <Th className="align-top" rowSpan="2">Тест</Th>
            <Th className="align-top" rowSpan="2">3 вопроса</Th>
        </tr>,
        // ng-if="show_oral"
        <tr key={3}>
            <Th>Комп.</Th>
            <Th>Устный</Th>
        </tr>
    ];

    const tableBody = Array(0);
    data.students.forEach((student, i) => {
        if (student.YEAR === year &&
            student.SEMESTER === semester &&
            student.FACULTET === faculty &&
            student.COURSE === course &&
            student.STUDY_GROUP === group &&
            (!onlySportsmen || student.IS_SPORT === true)) {
            tableBody.push(
                <tr key={i}>
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">
                        {<SelectDiv id={i} list={data.sectionsOptions} updateMethod={st.updateStudentSection} value={student.SECTION} />}
                    </Td>
                    <Td className="col-md-1">
                        {<SelectDiv id={i} list={data.teachersOptions} updateMethod={st.updateStudentTeacher} value={student.PERSON} />}
                    </Td>
                    <Td className="col-md-1">
                        <span className="mo_classes[x.FK_EKN_STATUS || 0]">
                            <SelectDiv id={i} list={data.eknStatusesOptions} updateMethod={st.updateStudentEknStatus} value={student.FK_EKN_STATUS} />
                            <br />
                            {student.DATE_STATUS}
                        </span>
                        <br />
                        {/* checkbox edit */}
                        <CheckboxDiv
                            id={i}
                            updateMethod={st.updateStudentIsSport}
                            value={student.IS_SPORT}
                        />
                    </Td>
                    <Td className="col-md-1">ANKETA</Td>
                    <Td className="col-md-1">TEST_RES</Td>
                    {/* ng-if="show_oral" */}
                    <Td className="col-md-1">ORAL_NAME
                        {/* || "Не определено" */}
                        {/* <a href="/"
                                    editable-select="x.ORAL_TEST"
                                    edit-disabled="11x.CANNOT_ZACHET22"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentOral($data,x.FK_STUDENT)" ng-if="x.SHOW_ORAL_STUD">
                                    11 x.ORAL_NAME || "Не определено" 22
                                </a> */}
                    </Td>
                    <Td className="col-md-1">PART3_NAME
                        {/* || "Не определено" */}
                        {/* <a href="/"
                                    editable-select="x.PART3"
                                    edit-disabled="11x.CANNOT_ZACHET22"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet3($data,x.FK_STUDENT)">
                                    11 x.PART3_NAME || "Не определено" 22
                                </a> */}
                    </Td>
                    <Td className="col-md-1">PART4_NAME
                        {/* || "Не определено" */}
                        {/* <a href="/"
                                    editable-select="x.PART4"
                                    edit-disabled="11x.CANNOT_ZACHET22"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet4($data,x.FK_STUDENT)">
                                    11 x.PART4_NAME || "Не определено" 22
                                </a> */}
                    </Td>
                    <Td className="col-md-1">ZACH_PERSON
                        {/* || "Не определено" */}
                        {/* <a href="/"
                                    editable-select="x.ZACHET"
                                    edit-disabled="11x.CANNOT_ZACHET22"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet($data,x.FK_STUDENT)">
                                    11 x.ZACHET_NAME || "Не определено" 22
                                </a>
                                11 x.ZACH_PERSON 22 */}
                    </Td>
                    {/* ng-if="false" */}
                    <Td className="col-md-1">ZACHET_DATE
                        {/* || "Не определено" */}
                        {/* <a href="/"
                                    editable-text="x.ZACHET_DATE"
                                    onbeforesave="updateStudentZachetDate($data,x.FK_STUDENT)">
                                    11 x.ZACHET_DATE || "Не определено" 22
                                </a> */}
                    </Td>
                    <Td className="col-md-1">DECANAT_ZACHET</Td>
                    <Td>???</Td>
                </tr>
            );
        }
    })

    return (
        <div>
            {/* Панель выбора студентов */}
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

                <div className="col-sm-3">
                    {/* Дата зачета для группы */}
                    {/* Из выбора даты вызывается zach_to_dec() */}
                    <Datepicker
                        // outerDivClassName="col-sm-2"
                        value={zach}
                        onChange={e => setZach(e.target.value)}
                        label="Дата зачета"
                    />

                    {/* Чекбокс "Только спортсмены" */}
                    <Checkbox
                        // outerDivClassName="col-sm-2"
                        onChange={() => setOnlySportsmen(value => !value)}
                        label="Только спортсмены"
                    >
                        {onlySportsmen}
                    </Checkbox>
                </div>

                {/* load_test() */}
                <Button
                    outerDivClassName="col-sm-1"
                    value="Тесты"
                />
            </Panel>

            {/* Список студентов */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}
