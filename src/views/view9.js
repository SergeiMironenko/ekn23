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

export default function View9(props) {
    const [data] = useState(st.getData());
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [faculty, setFaculty] = useState('');
    const [course, setCourse] = useState('');
    const [group, setGroup] = useState('');
    const [onlyResults, setOnlyResults] = useState(false);
    const [onlySportsmen, setOnlySportsmen] = useState(false);

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
            <Th>Итоговый зачет</Th>
            <Th>Пред. сем.</Th>
            {/* ng-if="showg_email" */}
            <Th>e-mail</Th>
        </tr>;

    const tableBody = Array(0);
    data.students.forEach((student, i) => {
        if (!onlySportsmen)  // проверка отдельного студента, является ли он спортсменом
            tableBody.push(
                <tr key={i}>
                    {/* ng-if="x.RN==1" для 4 следующих,  ng-if="only_sport" для 1 следующей */}
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">???
                        <div ng-if="x.RN==1">
                            <span className="mo_classes[x.FK_EKN_STATUS || 0]">
                                <SelectDiv id={i} list={data.eknStatusesOptions} updateMethod={st.updateStudentEknStatus}>{student.FK_EKN_STATUS}</SelectDiv>
                                <br />
                                {student.DATE_STATUS}
                            </span>
                            <br />
                            {/* CheckboxDiv */}
                            {student.IS_SPORT}
                            {student.IS_DIST}
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
                        <InputDiv id={i} updateMethod={st.updateStudentAttend}>{student.ATTEND}</InputDiv>
                    </Td>

                    {/* ng-if="showg_referat && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentReferat}>{student.REFERAT}</InputDiv>
                    </Td>

                    {/* ng-if="showg_normative1 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentNormative1}>{student.NORMATIVE1}</InputDiv>
                    </Td>

                    {/* ng-if="showg_normative2 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentNormative2}>{student.NORMATIVE2}</InputDiv>
                    </Td>

                    {/* ng-if="showg_ekn_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentEknBall}>{student.EKN_BALL}</InputDiv>
                    </Td>

                    {/* ng-if="showg_gto_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentGTOBall}>{student.GTO_BALL}</InputDiv>
                    </Td>

                    {/* ng-if="showg_theory && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentTheory}>{student.THEORY}</InputDiv>
                    </Td>

                    {/* ng-if="showg_test_ball  && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentTest}>{student.TEST}</InputDiv>
                    </Td>

                    {/* ng-if="showg_compl_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} updateMethod={st.updateStudentComplex}>{student.COMPLEX}</InputDiv>
                    </Td>

                    {/* ng-if="showg_admit" */}
                    <Td className="col-md-1">ADMIT
                        <SelectDiv id={i} list={data.admitsOptions} updateMethod={st.updateStudentAdmit}>{student.ADMIT}</SelectDiv>
                    </Td>

                    {/* ng-if="!only_sections" */}
                    <Td hide={onlyResults} className="col-md-1" >TOTAL</Td>

                    <Td className="col-md-1">
                        <InputDiv id={i} updateMethod={st.updateStudentAllBalls}>{student.ALL_BALLS}</InputDiv>
                    </Td>

                    <Td className="col-md-1">
                        <SelectDiv id={i} list={data.zachetNamesOptions} updateMethod={st.updateStudentZachet}>{student.ZACHET_NAME}</SelectDiv>
                    </Td>

                    <Td className="col-md-1">{student.FINAL_ZACHET_NAME}</Td>
                    <Td className="col-md-1">{student.DECANAT_ZACHET}</Td>
                    {/* ng-if="showg_email" */}
                    <Td className="col-md-1">{student.EMAIL}</Td>
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

                {/* Чекбокс "Только спортсмены" */}
                <Checkbox
                    outerDivClassName="col-sm-2"
                    value={onlySportsmen}
                    onChange={() => setOnlySportsmen(value => !value)}
                    label="Только спортсмены"
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

                {/* Чекбокс "Только итоги" */}
                <Checkbox
                    outerDivClassName="col-sm-2"
                    value={onlyResults}
                    onChange={() => setOnlyResults(value => !value)}
                    label="Только итоги"
                />
            </Panel>

            <div>дата зачета для группы</div>
            {/* <div ng-if="students[0].IS_ZAM_DEC">
                    Дата зачета для группы:
                    <a href="/"
                        editable-date="zachet_date"
                        onbeforesave="set_zachet_date($data)">
                        11 (zachet_date || "Не определено") | date:'yyyy.MM.dd' 22
                    </a>
                    <button className="btn btn-success" ng-click="zach_to_dec()">Принять</button>
                </div> */}

            <div>тесты</div>
            {/* <div ng-if="is_admin">
                    <button className="btn btn-success" ng-click="load_test()">Тесты</button>
                </div> */}

            {/* Список студентов */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}