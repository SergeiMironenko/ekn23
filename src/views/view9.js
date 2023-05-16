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

export default function View9({ data, setData, opt, upd }) {
    const [year, setYear] = useState(data.years[0]);
    const [semester, setSemester] = useState(data.semesters[0]);
    const [faculty, setFaculty] = useState(data.faculties[0]);
    const [course, setCourse] = useState(data.courses[0]);
    const [group, setGroup] = useState(data.groups[0]);
    const [onlyResults, setOnlyResults] = useState(false);
    const [onlySportsmen, setOnlySportsmen] = useState(false);
    const [zach, setZach] = useState("2017-06-01");
    const [onlyRead] = useState(false);

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
                                <SelectDiv id={i} list={opt(data.eknStatuses)} upd={upd("FK_EKN_STATUS", i)} value={student.FK_EKN_STATUS || "Не определено"} disabled={onlyRead} />
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
                    <Td className="col-md-1">
                        {student.PAY_SUMM}
                        <br />
                        {student.PAY_DATE}
                    </Td>

                    {/* ng-if="showg_attend  && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("ATTEND", i)} value={student.ATTEND || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_referat && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("REFERAT", i)} value={student.REFERAT || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_normative1 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("NORMATIVE1", i)} value={student.NORMATIVE1 || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_normative2 && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("NORMATIVE2", i)} value={student.NORMATIVE2 || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_ekn_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("EKN_BALL", i)} value={student.EKN_BALL || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_gto_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("GTO_BALL", i)} value={student.GTO_BALL || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_theory && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("THEORY", i)} value={student.THEORY || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_test_ball  && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("TEST", i)} value={student.TEST || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_compl_ball && !only_sections" */}
                    <Td
                        hide={onlyResults}
                        className="col-md-1"
                    >
                        <InputDiv id={i} upd={upd("COMPLEX", i)} value={student.COMPLEX || "Не определено"} disabled={onlyRead} />
                    </Td>

                    {/* ng-if="showg_admit" */}
                    <Td className="col-md-1">ADMIT ??
                        {/* <SelectDiv id={i} list={opt(data.admits)} upd={upd("ADMIT", i)} value={student.ADMIT} /> */}
                    </Td>

                    {/* ng-if="!only_sections" */}
                    <Td hide={onlyResults} className="col-md-1" >TOTAL</Td>

                    <Td className="col-md-1">
                        <InputDiv id={i} upd={upd("ALL_BALLS", i)} value={student.ALL_BALLS || "Не определено"} disabled={onlyRead} />
                    </Td>

                    <Td className="col-md-1">ZACHET_NAME
                        {/* <SelectDiv id={i} list={data.zachetNamesOptions} upd={upd("ZACHET_NAME", i)}>{student.ZACHET_NAME}</SelectDiv> */}
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
                    disabled={onlyRead}
                    outerDivClassName="col-sm-auto"
                    value={zach}
                    onChange={e => setZach(e.target.value)}
                    label="Дата зачета"
                />
            </Panel>

            {/* Список студентов */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}
