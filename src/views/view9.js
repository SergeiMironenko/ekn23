import { useState } from 'react';
import * as st from '../functions/data';
import Panel from '../components/Panel';
import SelectPanel from '../components/SelectPanel';
import Table from '../components/Table';
import Checkbox from '../components/Checkbox';
import Td from '../components/Td';
import Th from '../components/Th';
import SelectDiv from '../components/SelectDiv';
import InputDiv from '../components/InputDiv';
import Datepicker from '../components/Datepicker';
import Button from '../components/Button';

export default function View9(props) {
    const [data] = useState(st.getData());
    const [year, setYear] = useState(data.years[0].NAME);
    const [semester, setSemester] = useState(data.semesters[0].NAME);
    const [faculty, setFaculty] = useState(data.faculties[0].id);
    const [course, setCourse] = useState(data.courses[0].NAME);
    const [group, setGroup] = useState(data.groups[0]);
    const [onlyResults, setOnlyResults] = useState(false);
    const [onlySportsmen, setOnlySportsmen] = useState(false);
    const [zach, setZach] = useState("2017-06-01");

    const tableHead =
        <tr>
            <Th>Студент</Th>
            <Th>Пол</Th>
            <Th>Статус</Th>
            <Th>Отделение</Th>
            <Th>Преподаватель</Th>
            <Th>Оплата</Th>
            {/* ng-if="showg_attend && !only_sections" */}
            <Th hide={onlyResults}>Посещ.</Th>
            {/*  ng-if="showg_referat && !only_sections" */}
            <Th hide={onlyResults}>Реф.</Th>
            {/* ng-if="showg_normative1 && !only_sections" */}
            <Th hide={onlyResults}>Норм. 1</Th>
            {/* ng-if="showg_normative2 && !only_sections" */}
            <Th hide={onlyResults}>Норм. 2</Th>
            {/* ng-if="showg_ekn_ball && !only_sections" */}
            <Th hide={onlyResults}>ЕКН</Th>
            {/* ng-if="showg_gto_ball && !only_sections" */}
            <Th hide={onlyResults}>ГТО</Th>
            {/* ng-if="showg_theory && !only_sections" */}
            <Th hide={onlyResults}>Теория</Th>
            {/* ng-if="showg_test_ball && !only_sections" */}
            <Th hide={onlyResults}>Тест</Th>
            {/* ng-if="showg_compl_ball && !only_sections" */}
            <Th hide={onlyResults}>Комплекс</Th>
            {/* ng-if="showg_admit" */}
            <Th>Допуск</Th>
            {/* ng_if="!only_sections" */}
            <Th hide={onlyResults}>Всего</Th>
            <Th>Баллы</Th>
            <Th>Зачет</Th>
            {/* <Th>Итоговый зачет</Th> */}
            <Th>Пред. сем.</Th>
            {/* ng-if="showg_email" */}
            {/* <Th>e-mail</Th> */}
        </tr>;

    const tableBody = Array(0);
    data.students.forEach((student, i) => {
        if (student.YEAR === year &&
            student.SEMESTER === semester &&
            student.FACULTET === faculty &&
            student.COURSE === course &&
            student.STUDY_GROUP === group &&
            !onlySportsmen)  // проверка отдельного студента, является ли он спортсменом
            tableBody.push(
                <tr key={i}>
                    {/* ng-if="x.RN==1" для 4 следующих,  ng-if="only_sport" для 1 следующей */}
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">
                        <div ng-if="x.RN==1">
                            <span className="mo_classes[x.FK_EKN_STATUS || 0]">
                                <SelectDiv id={i} list={data.eknStatusesOptions} updateMethod={st.updateStudentEknStatus} value={student.FK_EKN_STATUS || "Не определено"} />
                                {/* <br /> */}
                                {student.DATE_STATUS}
                            </span>
                            <br />
                            {/* CheckboxDiv */}
                            {student.IS_SPORT ? "Спортсмен" : "-"}
                            <br />
                            {student.IS_DIST ? "Дист." : "-"}
                        </div>
                    </Td>
                    <Td className="col-md-1">{student.SECTION || "Не определено"}</Td>
                    <Td className="col-md-1">{student.PERSON || "Не определено"}</Td>
                    <Td className="col-md-1">{student.PAYM}</Td>

                    {/* ng-if="showg_attend  && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentAttend} value={student.ATTEND || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_referat && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentReferat} value={student.REFERAT || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_normative1 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentNormative1} value={student.NORMATIVE1 || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_normative2 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentNormative2} value={student.NORMATIVE2 || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_ekn_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentEknBall} value={student.EKN_BALL || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_gto_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentGTOBall} value={student.GTO_BALL || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_theory && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentTheory} value={student.THEORY || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_test_ball  && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentTest} value={student.TEST || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_compl_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentComplex} value={student.COMPLEX || "Не определено"} />
                    </Td>

                    {/* ng-if="showg_admit" */}
                    <Td className="col-md-1">ADMIT
                        <SelectDiv id={i} list={data.admitsOptions} updateMethod={st.updateStudentAdmit}>{student.ADMIT}</SelectDiv>
                    </Td>

                    {/* ng-if="!only_sections" */}
                    <Td hide={onlyResults} className="col-md-1" >TOTAL</Td>

                    <Td className="col-md-1">
                        <InputDiv id={i} updateMethod={st.updateStudentAllBalls} value={student.ALL_BALLS || "Не определено"} />
                    </Td>

                    <Td className="col-md-1">
                        <SelectDiv id={i} list={data.zachetNamesOptions} updateMethod={st.updateStudentZachet}>{student.ZACHET_NAME}</SelectDiv>
                    </Td>

                    {/* <Td className="col-md-1">{student.FINAL_ZACHET_NAME}</Td> */}
                    <Td className="col-md-1">{student.DECANAT_ZACHET}</Td>
                    {/* ng-if="showg_email" */}
                    {/* <Td className="col-md-1">{student.EMAIL}</Td> */}
                </tr>
            );
    });

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
                    outerDivClassName="col-sm-1"
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
                    {/* Чекбокс "Только итоги" */}
                    <Checkbox
                        value={onlyResults}
                        onChange={() => setOnlyResults(value => !value)}
                        label="Только итоги"
                    />

                    {/* Чекбокс "Только спортсмены" */}
                    <Checkbox
                        value={onlySportsmen}
                        onChange={() => setOnlySportsmen(value => !value)}
                        label="Только спортсмены"
                    />
                </div>

                <Datepicker
                    outerDivClassName="col-sm-3"
                    value={zach}
                    onChange={e => setZach(e.target.value)}
                    label="Дата зачета"
                />

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