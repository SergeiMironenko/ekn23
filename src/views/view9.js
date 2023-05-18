// Ведомости
import { useState } from 'react'
import Panel from '../components/Panel'
import SelectPanel from '../components/SelectPanel'
import Table from '../components/Table'
import Checkbox from '../components/Checkbox'
import Td from '../components/Td'
import Th from '../components/Th'
import SelectDiv from '../components/SelectDiv'
import InputDiv from '../components/InputDiv'
import Datepicker from '../components/Datepicker'

export default function View9({ data, getOptions, updateData }) {
    const [year, setYear] = useState(data.years[0]);
    const [semester, setSemester] = useState(data.semesters[0]);
    const [faculty, setFaculty] = useState(data.faculties[0]);
    const [course, setCourse] = useState(data.courses[0]);
    const [group, setGroup] = useState(data.groups[0]);
    const [onlyResults, setOnlyResults] = useState(false);
    const [onlySportsmen, setOnlySportsmen] = useState(false);
    const [onlyRead, setOnlyRead] = useState(false);

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

    const tableBody = data.students
        .filter(student =>
            student.YEAR.id === year.id
            && student.SEMESTER.id === semester.id
            && student.FACULTET.id === faculty.id
            && student.COURSE.id === course.id
            && student.STUDY_GROUP.id === group.id
            && !onlySportsmen
        )
        .map((student, i) => {
            return (
                <tr key={student.ID}>
                    {/* ng-if="x.RN==1" для 4 следующих,  ng-if="only_sport" для 1 следующей */}
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">
                        <div ng-if="x.RN==1">
                            <span className="mo_classes[x.FK_EKN_STATUS || 0]">
                                <SelectDiv
                                    value={student.FK_EKN_STATUS || "Не определено"}
                                    prop="value"
                                    options={getOptions(data.eknStatuses, "value")}
                                    updateData={updateData("students", student.ID, "FK_EKN_STATUS")}
                                    disabled={onlyRead}
                                />
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
                    <Td className="col-md-1">{student.SECTION.value || "Не определено"}</Td>
                    <Td className="col-md-1">{student.PERSON.FIO || "Не определено"}</Td>
                    <Td className="col-md-1">
                        {student.PAY_SUMM}
                        <br />
                        {student.PAY_DATE}
                    </Td>
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.ATTEND}
                            updateData={updateData("students", student.ID, "ATTEND")}
                            disabled={onlyRead}
                        />
                    </Td>
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.REFERAT}
                            updateData={updateData("students", student.ID, "REFERAT")}
                            disabled={onlyRead}
                        />
                    </Td>

                    {/* ng-if="showg_normative1 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.NORMATIVE1}
                            updateData={updateData("students", student.ID, "NORMATIVE1")}
                            disabled={onlyRead}
                        />
                    </Td>

                    {/* ng-if="showg_normative2 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.NORMATIVE2}
                            updateData={updateData("students", student.ID, "NORMATIVE2")}
                            disabled={onlyRead}
                        />
                    </Td>

                    {/* ng-if="showg_ekn_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.EKN_BALL}
                            updateData={updateData("students", student.ID, "EKN_BALL")}
                            disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_gto_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.GTO_BALL}
                            updateData={updateData("students", student.ID, "GTO_BALL")}
                            disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_theory && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.THEORY}
                            updateData={updateData("students", student.ID, "THEORY")}
                            disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_test_ball  && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.TEST}
                            updateData={updateData("students", student.ID, "TEST")}
                            disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_compl_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv
                            value={student.COMPLEX}
                            updateData={updateData("students", student.ID, "COMPLEX")}
                            disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_admit" */}
                    <Td className="col-md-1">ADMIT ??
                        {/* <SelectDiv id={i} list={getOptions(data.admits)} updateData={updateData("ADMIT", i)} value={student.ADMIT} /> */}
                    </Td>

                    {/* ng-if="!only_sections" */}
                    <Td hide={onlyResults} className="col-md-1" >TOTAL</Td>

                    <Td className="col-md-1">
                        <InputDiv
                            value={student.ALL_BALLS}
                            updateData={updateData("students", student.ID, "ALL_BALLS")}
                            disabled={onlyRead}
                        />
                    </Td>

                    <Td className="col-md-1">ZACHET_NAME
                        {/* <SelectDiv id={i} list={data.zachetNamesOptions} updateData={updateData("ZACHET_NAME", i)}>{student.ZACHET_NAME}</SelectDiv> */}
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
                    options={getOptions(data.faculties, "value")}
                    onChange={e => setFaculty(JSON.parse(e.target.value))}
                    label="Факультет"
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
                    {/* Чекбокс "Только итоги" */}
                    <Checkbox
                        value={onlyResults}
                        label="Только итоги"
                        onChange={() => setOnlyResults(value => !value)}
                    />

                    {/* Чекбокс "Только спортсмены" */}
                    <Checkbox
                        value={onlySportsmen}
                        label="Только спортсмены"
                        onChange={() => setOnlySportsmen(value => !value)}
                    />
                </div>

                <Datepicker
                    value={data.zach}
                    label="Дата зачета"
                    onChange={e => updateData("zach")(e.target.value)}
                    disabled={onlyRead}
                />

                <Checkbox
                    value={onlyRead}
                    label="Режим редактирования"
                    onChange={() => setOnlyRead(prev => !prev)}
                />
            </Panel>

            {/* Список студентов */}
            <Table
                thead={tableHead}
                tbody={tableBody}
            />
        </div>
    )
}
