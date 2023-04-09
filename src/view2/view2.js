import React from 'react';

function ThRender(props) {
    console.log(props);
    if (props.show)
        return <th
            rowspan={props.rowspan}
            colspan={props.colspan}
        >
            {props.value}
        </th>;
}

class View2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onlyNormatives: true,
            onlySections: true,
            year: '',
            semester: '',
            faculty: '',
            course: '',
            group: '',
        };
        this.onlyNormativesChange = this.onlyNormativesChange.bind(this);
        this.onlySectionsChange = this.onlySectionsChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.semesterChange = this.semesterChange.bind(this);
        this.facultyChange = this.facultyChange.bind(this);
        this.courseChange = this.courseChange.bind(this);
        this.groupChange = this.groupChange.bind(this);
    }

    onlyNormativesChange() {
        this.setState(prevState => ({
            onlyNormatives: !prevState.onlyNormatives,
        }))
    }

    onlySectionsChange() {
        this.setState(prevState => ({
            onlySections: !prevState.onlySections,
        }))
    }

    yearChange(event) {
        this.setState({ year: event.target.value });
    }

    semesterChange(event) {
        this.setState({ semester: event.target.value });
    }

    facultyChange(event) {
        this.setState({ faculty: event.target.value });
    }

    courseChange(event) {
        this.setState({ course: event.target.value });
    }

    groupChange(event) {
        this.setState({ group: event.target.value });
    }

    render() {
        const years = [{ "PK": 2015, "NAME": "2015" }, { "PK": 2016, "NAME": "2016" }, { "PK": 2017, "NAME": "2017" }, { "PK": 2018, "NAME": "2018" }, { "PK": 2019, "NAME": "2019" }, { "PK": 2020, "NAME": "2020" }, { "PK": 2021, "NAME": "2021" }, { "PK": 2022, "NAME": "2022" }, { "PK": 2023, "NAME": "2023" }];
        const yearOptions = years.map((year, idx) => {
            return <option key={idx}>{year.NAME}</option>
        })

        const semesters = [{ "NSEM": 0, "NAME": "Весенний" }, { "NSEM": 1, "NAME": "Осенний" }];
        const semesterOptions = semesters.map((semester, idx) => {
            return <option key={idx}>{semester.NAME}</option>
        })

        const faculties = [
            { "id": "ФМА", "type": "step" },
            { "id": "ФБ", "type": "step" },
            { "id": "АВТФ", "type": "step" },
            { "id": "РЭФ", "type": "step" },
            { "id": "МТФ", "type": "step" },
            { "id": "ФЛА", "type": "step" },
            { "id": "ФПМИ", "type": "step" },
            { "id": "ФТФ", "type": "step" },
            { "id": "ФЭН", "type": "step" },
            { "id": "ФГО", "type": "step" },
            { "id": "ЮФ", "type": "step" }
        ];
        const facultyOptions = faculties.map((faculty, idx) => {
            return <option key={idx}>{faculty.id}</option>
        })

        const courses = [{ "PK": 1, "NAME": "1" }, { "PK": 2, "NAME": "2" }, { "PK": 3, "NAME": "3" }, { "PK": 4, "NAME": "4" }];
        const courseOptions = courses.map((course, idx) => {
            return <option key={idx}>{course.NAME}</option>
        })

        const groups = ["ПМ-72", "ПМ-91"];
        const groupOptions = groups.map((group, idx) => {
            return <option key={idx}>{group}</option>
        })

        const normatives = [
            "Прыжок в длину, сантиметров",
            "Подъем туловища",
            "Подтягивание, раз",
            "Гибкость, сантиметров",
            "Бег 1000м, секунд",
        ]
        const normativeList = normatives.map((normative) => <th>{normative}</th>);

        return (
            <div>
                {/* <!-- Панель выбора студентов --> */}
                <div className="panel panel-default" >
                    <div className="row">
                        <div className="col-sm-1">
                            <p>Год</p>
                            <select value={this.state.year} onChange={this.yearChange}>
                                {yearOptions}
                            </select>
                        </div>

                        <div className="col-sm-1">
                            <p>Семестр</p>
                            <select value={this.state.semester} onChange={this.semesterChange}>
                                {semesterOptions}
                            </select>
                        </div>

                        <div className="col-sm-3">
                            <p>Факультет</p>
                            <select value={this.state.faculty} onChange={this.facultyChange}>
                                {facultyOptions}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <p>Курс</p>
                            <select value={this.state.course} onChange={this.courseChange}>
                                {courseOptions}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <p>Группа</p>
                            <select value={this.state.group} onChange={this.groupChange}>
                                {groupOptions}
                            </select>
                            {/* <ui-select ng-model="groups_selected"
                                theme="select2"
                                ng-disabled="groups_disabled"
                                on-select="change_group($item)"
                                style={{ minWidth: 200 }}
                                title="Учебная группа">
                                <ui-select-match>$select.selected.NAME</ui-select-match>
                                <ui-select-choices repeat="gr in groups | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="gr.NAME"></div>
                                </ui-select-choices>
                            </ui-select> */}
                        </div>

                        <div className="col-sm-1">
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.onlySections} onChange={this.onlySectionsChange} />Только мое отделение</label>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.onlyNormatives} onChange={this.onlyNormativesChange} />Показывать только нормативы</label>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- Список студентов --> */}
                <table className="table table-hover">
                    <tr>
                        <ThRender show={true} rowspan={2} value="Студент" />
                        <ThRender show={this.state.onlyNormatives} rowspan={2} value="Пол" />
                        <ThRender show={this.state.onlyNormatives} rowspan={2} value="Отделение" />
                        <ThRender show={this.state.onlyNormatives} rowspan={2} value="Преподаватель" />
                        <ThRender show={true} colspan={3} value="Нормативы" />
                        <ThRender show={true} colspan={3} value="Измерения" />
                        {/* <th rowspan={2}>Студент</th> */}
                        {/* <th ng-if="!only_normatives" rowspan={2}>Пол</th> */}
                        {/* <th ng-if="!only_normatives" rowspan={2}>Отделение</th> */}
                        {/* <th ng-if="!only_normatives" rowspan={2}>Преподаватель</th> */}
                        {/* <th colspan={3}>Нормативы</th> */}
                        {/* <th colspan={3}>Измерения</th> */}
                    </tr>
                    <tr>
                        {/* <th ng-repeat="n in normatives">n.NAME</th> */}
                        {normativeList}
                        <th>Р.</th>
                        <th>В.</th>
                        <th>И</th>
                    </tr>
                    <tr ng-repeat="x in students" ng-context-menu="menuStudents">
                        <td className="col-md-2">x.FIO</td>
                        <td ng-if="!only_normatives" className="col-md-1">x.SEX</td>
                        <td ng-if="!only_normatives" className="col-md-1">
                            <a href="/"
                                editable-select="x.FK_EKN_SECTIONS"
                                e-ng-options="s.PK as s.NAME for s in sections"
                                onbeforesave="updateStudentSections($data,x.FK_STUDENT)">
                                x.SECTION || "Не определено"
                            </a>
                        </td>
                        <td ng-if="!only_normatives" className="col-md-2">
                            <a href="/"
                                editable-select="x.ID_PERSON"
                                edit-disabled="{{x.IS_PERSON_DISABLED}}"
                                e-ng-options="s.IDPERSON as s.FIO for s in persons"
                                onbeforesave="updateStudentPersons($data,x.FK_STUDENT)">
                                x.PERSON || "Не определено"
                            </a>

                        </td>

                        <td className="col-md-1" ng-repeat="n in normatives">

                            <a ng-if="!(x.SHOW_PRESS == 0 && n.PK == 2) && ! (x.SHOW_PODT == 0 && n.PK == 3)" href="/"
                                editable-text="x[n.VAL_NAME]"
                                onbeforesave="updateStudentsValue($data,x.FK_STUDENT,x[n.PK_NAME])">
                                !(x[n.VAL_NAME] == null ) ? x[n.VAL_NAME]  : "не введено"
                            </a>
                        </td>
                        <td className="col-md-1">
                            <a href="/"
                                editable-text="x.H"
                                onbeforesave="updateStudentsH($data,x.FK_STUDENT)">
                                !(x.H == null ) ? (x.H).toFixed(2)  : "не введено"
                            </a>
                        </td>
                        <td className="col-md-1">
                            <a href="/"
                                editable-text="x.W"
                                onbeforesave="updateStudentsW($data,x.FK_STUDENT)">
                                !(x.W == null ) ? x.W  : "не введено"
                            </a>
                        </td>

                        <td className="col-md-1">
                            (x.W/(x.H*x.H)).toFixed(2)
                        </td>

                    </tr>
                </table>

            </div>


        )
    }
}

export default View2;