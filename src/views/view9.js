import React from 'react';
import { getData } from '../functions/data';
import Panel from '../components/Panel';
import SelectPanel from '../components/SelectPanel';
import Table from '../components/Table';
import Checkbox from '../components/Checkbox';
import Td from '../components/Td';
import Th from '../components/Th';

class View9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData(),
            year: '',
            semester: '',
            faculty: '',
            course: '',
            group: '',
            onlySportsmen: false,
            onlyResults: false,
        }

        this.yearChange = this.yearChange.bind(this);
        this.semesterChange = this.semesterChange.bind(this);
        this.facultyChange = this.facultyChange.bind(this);
        this.courseChange = this.courseChange.bind(this);
        this.groupChange = this.groupChange.bind(this);

        this.onlySportsmenChange = this.onlySportsmenChange.bind(this);
        this.onlyResultsChange = this.onlyResultsChange.bind(this);

    }

    // Изменение чекбокса "только спортсмены"
    onlySportsmenChange() {
        this.setState(prevState => ({
            onlySportsmen: !prevState.onlySportsmen,
        }))
    }

    // Изменение чекбокса "только итоги"
    onlyResultsChange() {
        this.setState(prevState => ({
            onlyResults: !prevState.onlyResults,
        }))
    }

    // Изменение года
    yearChange(event) {
        this.setState({ year: event.target.value });
    }

    // Изменение семестра
    semesterChange(event) {
        this.setState({ semester: event.target.value });
    }

    // Изменение факультета
    facultyChange(event) {
        this.setState({ faculty: event.target.value });
    }

    // Изменение курса
    courseChange(event) {
        this.setState({ course: event.target.value });
    }

    // Изменение группы
    groupChange(event) {
        this.setState({ group: event.target.value });
    }

    render() {
        const tableHead =
            <tr>
                <Th>Студент</Th>
                <Th>Пол</Th>
                <Th>Статус</Th>
                <Th>Отделение</Th>
                <Th>Преподаватель</Th>
                <Th>Оплата</Th>
                {/* ng-if="showg_attend && !only_sections" */}
                <Th hide={this.state.onlyResults}>Посещ.</Th>
                {/*  ng-if="showg_referat && !only_sections" */}
                <Th hide={this.state.onlyResults}>Реф.</Th>
                {/* ng-if="showg_normative1 && !only_sections" */}
                <Th hide={this.state.onlyResults}>Норм. 1</Th>
                {/* ng-if="showg_normative2 && !only_sections" */}
                <Th hide={this.state.onlyResults}>Норм. 2</Th>
                {/* ng-if="showg_ekn_ball && !only_sections" */}
                <Th hide={this.state.onlyResults}>ЕКН</Th>
                {/* ng-if="showg_gto_ball && !only_sections" */}
                <Th hide={this.state.onlyResults}>ГТО</Th>
                {/* ng-if="showg_theory && !only_sections" */}
                <Th hide={this.state.onlyResults}>Теория</Th>
                {/* ng-if="showg_test_ball && !only_sections" */}
                <Th hide={this.state.onlyResults}>Тест</Th>
                {/* ng-if="showg_compl_ball && !only_sections" */}
                <Th hide={this.state.onlyResults}>Комплекс</Th>
                {/* ng-if="showg_admit" */}
                <Th>Допуск</Th>
                {/* ng_if="!only_sections" */}
                <Th hide={this.state.onlyResults}>Всего</Th>
                <Th>Баллы</Th>
                <Th>Зачет</Th>
                <Th>Итоговый зачет</Th>
                <Th>Пред. сем.</Th>
                {/* ng-if="showg_email" */}
                <Th>e-mail</Th>
            </tr>;

        const tableBody = Array(0);
        this.state.data.students.forEach((student, i) => {
            if (!this.state.onlySportsmen)  // проверка отдельного студента, явлсяется ли он спортсменом
                tableBody.push(
                    <tr key={i}>
                        {/* ng-if="x.RN==1" для 4 следующих,  ng-if="only_sport" для 1 следующей */}
                        <Td className="col-md-2">{student.FIO}</Td>
                        <Td className="col-md-1">{student.SEX}</Td>
                        <Td className="col-md-1">???
                            {/* <div ng-if="x.RN==1">
                            <span ng-className="mo_classes[x.FK_EKN_STATUS || 0]">
                                <a href="/"
                                    editable-select="x.ID_EKN_STATUS"
                                    edit-disabled="11x.IS_EKN_STATUS_DISABLED22"
                                    e-ng-options="s.PK as s.NAME for s in ekn_status"
                                    onbeforesave="updateStudentEKNStatus($data,x.FK_STUDENT)">
                                    11 x.EKN_STATUS || "Не определено" 22
                                </a>
                                <br />11 x.DATE_STATUS 22</span>
                            <br />

                            <a href="/" editable-checkbox="x.IS_SPORT" e-title="Спортсмен?" onbeforesave="updateStudentEKNStatus2($data,x.FK_STUDENT)"
                                edit-disabled="11x.IS_DISABLED_SPORT22">
                                11 x.IS_SPORT && "Спортсмен" || "-" 22
                            </a>
                            11 x.IS_DIST 22
                        </div> */}
                        </Td>
                        <Td className="col-md-1">{student.SECTION || "Не определено"}</Td>
                        <Td className="col-md-1">{student.PERSON || "Не определено"}</Td>
                        <Td className="col-md-1">student.PAYM</Td>

                        {/* ng-if="showg_attend  && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >ATTEND
                            {/* <a href="/"
                            editable-text="x.ATTEND"
                            edit-disabled="x.IS_DISABLED"
                            onaftersave="updateStudentCol($data,x.PK,'attend')" ng-if="x.SHOW_ATTEND && !x.IS_DISABLED">
                            11 x.ATTEND || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.ATTEND 22</span> */}
                        </Td>

                        {/* ng-if="showg_referat && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >REFERAT
                            {/* <a href="/"
                            editable-text="x.REFERAT"
                            edit-disabled="x.IS_DISABLED"
                            onaftersave="updateStudentCol($data,x.PK,'referat')" ng-if="x.SHOW_REFERAT && !x.IS_DISABLED">
                            11 x.REFERAT || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.REFERAT 22</span> */}
                        </Td>

                        {/* ng-if="showg_normative1 && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >N1
                            {/* <a href="/"
                            editable-text="x.NORMATIVE1"
                            edit-disabled="x.IS_DISABLED"
                            onaftersave="updateStudentCol($data,x.PK,'normative1')" ng-if="x.SHOW_NORMATIVE1 && !x.IS_DISABLED">
                            11 x.NORMATIVE1 || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.NORMATIVE1 22</span> */}
                        </Td>

                        {/* ng-if="showg_normative2 && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >N2
                            {/* <a href="/"
                            editable-text="x.NORMATIVE2"
                            edit-disabled="x.IS_DISABLED"
                            onaftersave="updateStudentCol($data,x.PK,'normative2')" ng-if="x.SHOW_NORMATIVE2 && !x.IS_DISABLED">
                            11 x.NORMATIVE2 || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.NORMATIVE2 22</span> */}
                        </Td>

                        {/* ng-if="showg_ekn_ball && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >EKN
                            {/* <a href="/"
                            editable-text="x.EKN_BALL"
                            edit-disabled="x.IS_DISABLED_EKN"
                            onaftersave="updateStudentCol($data,x.PK,'enk_ball')" ng-if="x.SHOW_EKN_BALL && !x.IS_DISABLED_EKN">
                            11 x.EKN_BALL || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED_EKN">11 x.EKN_BALL 22</span> */}
                        </Td>

                        {/* ng-if="showg_gto_ball && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >GTO
                            {/* <a href="/"
                            editable-text="x.GTO_BALL"
                            edit-disabled="x.IS_DISABLED_GTO"
                            onaftersave="updateStudentCol($data,x.PK,'gto_ball')" ng-if="x.SHOW_GTO_BALL && !x.IS_DISABLED_GTO">
                            11 x.GTO_BALL || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED_GTO">11 x.GTO_BALL 22</span> */}
                        </Td>

                        {/* ng-if="showg_theory && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >
                            THEORY
                            {/* <a href="/"
                            editable-text="x.THEORY"
                            edit-disabled="x.IS_DISABLED"
                            onaftersave="updateStudentCol($data,x.PK,'theory')" ng-if="x.SHOW_THEORY && !x.IS_DISABLED">
                            11 x.THEORY || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.THEORY 22</span> */}
                        </Td>

                        {/* ng-if="showg_test_ball  && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >TEST
                            {/* <a href="/"
                            editable-text="x.TEST_BALL"
                            edit-disabled="11x.IS_DISABLED22"
                            onaftersave="updateStudentCol($data,x.PK,'test_ball')" ng-if="x.SHOW_TEST_BALL && !x.IS_DISABLED">
                            11 x.TEST_BALL || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.TEST_BALL 22</span> */}
                        </Td>

                        {/* ng-if="showg_compl_ball && !only_sections" */}
                        <Td
                            hide={this.state.onlyResults}
                            className="col-md-1"
                        >COMPLEX
                            {/* <a href="/"
                            editable-text="x.COMPL_BALL"
                            edit-disabled="11x.IS_DISABLED22"
                            onaftersave="updateStudentCol($data,x.PK,'compl_ball')" ng-if="x.SHOW_COMPL_BALL && !x.IS_DISABLED">
                            11 x.COMPL_BALL || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.COMPL_BALL 22</span> */}
                        </Td>

                        {/* ng-if="showg_admit" */}
                        <Td className="col-md-1">ADMIT
                            {/* <a href="/"
                            editable-select="x.ADMIT"
                            edit-disabled="11x.IS_DISABLED22"
                            e-ng-options="s.PK as s.NAME for s in parts"
                            onbeforesave="updateStudentCol($data,x.PK, 'admit')" ng-if="x.SHOW_ADMIT && !x.IS_DISABLED">
                            11 x.ADMIT || "Не определено" 22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.ADMIT 22</span> */}
                        </Td>

                        {/* ng-if="!only_sections" */}
                        <Td hide={this.state.onlyResults} className="col-md-1" >TOTAL</Td>

                        <Td className="col-md-1">ALL_BALLS
                            {/* <a href="/"
                            editable-text="x.ALL_BALLS"
                            edit-disabled="11x.IS_DISABLED22"
                            onbeforesave="updateStudentCol($data,x.PK, 'all_balls')" ng-if="!x.IS_DISABLED">
                            11 (x.ALL_BALLS == null ? '' : x.ALL_BALLS).toString() || "Не определено"22
                        </a>
                        <span ng-if="x.IS_DISABLED">11 x.ALL_BALLS 22</span> */}
                        </Td>

                        <Td className="col-md-1">ZACHET_NAME
                            {/* <a href="/"
                            editable-select="x.ZACHET"
                            edit-disabled="11x.CANNOT_ZACHET22"
                            e-ng-options="s.PK as s.NAME for s in parts"
                            onbeforesave="updateStudentZachet($data,x.FK_STUDENT,x.PK)"
                            ng-if="!x.CANNOT_ZACHET">
                            11 x.ZACHET_NAME || "Не определено" 22
                        </a>
                        <span ng-if="x.CANNOT_ZACHET">11 x.ZACHET_NAME 22</span> */}
                        </Td>

                        <Td className="col-md-1">FINAL_ZACHET_NAME</Td>
                        <Td className="col-md-1">DECANAT_ZACHET</Td>
                        {/* ng-if="showg_email" */}
                        <Td className="col-md-1">EMAIL</Td>
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
                        value={this.state.year}
                        change={this.yearChange}
                        options={this.state.data.yearsOptions}
                        label="Год"
                    />

                    {/* Выбор семестра */}
                    <SelectPanel
                        outerDivClassName="col-sm-2"
                        value={this.state.semester}
                        change={this.semesterChange}
                        options={this.state.data.semestersOptions}
                        label="Семестр"
                    />

                    {/* Выбор факультета */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.faculty}
                        change={this.facultyChange}
                        options={this.state.data.facultiesOptions}
                        label="Факультет"
                    />

                    {/* Чекбокс "Только спортсмены" */}
                    <Checkbox
                        outerDivClassName="col-sm-2"
                        value={this.state.onlySportsmen}
                        onChange={this.onlySportsmenChange}
                        label="Только спортсмены"
                    />

                    {/* Выбор курса */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.course}
                        change={this.courseChange}
                        options={this.state.data.coursesOptions}
                        label="Курс"
                    />

                    {/* Выбор группы */}
                    <SelectPanel
                        outerDivClassName="col-sm-1"
                        value={this.state.group}
                        change={this.groupChange}
                        options={this.state.data.groupsOptions}
                        label="Группа"
                    />

                    {/* Чекбокс "Только итоги" */}
                    <Checkbox
                        outerDivClassName="col-sm-2"
                        value={this.state.onlyResults}
                        onChange={this.onlyResultsChange}
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
}

export default View9;