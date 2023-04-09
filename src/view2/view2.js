import React from 'react';

class View2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            semester: '',
            faculty: '',
        };
        this.yearChange = this.yearChange.bind(this);
        this.semesterChange = this.semesterChange.bind(this);
        this.facultyChange = this.facultyChange.bind(this);
    }

    yearChange(event) {
        this.setState({ year: event.target.value });
    }

    semesterChange(event) {
        this.setState({ semester: event.target.value });
    }

    facultyChange(event) {
        this.setState({ semester: event.target.value });
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

        const faculties = [{ "NSEM": 0, "NAME": "Весенний" }, { "NSEM": 1, "NAME": "Осенний" }];
        // const facultyOptions = faculties.map((faculty, idx) => {
        //     return <option key={idx}>{faculty.NAME}</option>
        // })


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
                            {/* <select value={this.state.faculty} onChange={this.facultyChange}>
                                {facultyOptions}
                            </select> */}
                        </div>
                        <div className="col-sm-3">
                            <p>Курс</p>
                            <ui-select ng-model="courses_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_course($item)"
                                style={{ minWidth: 200 }}
                                title="Курс">
                                <ui-select-match>$select.selected.NAME</ui-select-match>
                                <ui-select-choices repeat="course in courses">
                                    <div ng-bind-html="course.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>
                        <div className="col-sm-3">
                            <p>Группа</p>
                            <ui-select ng-model="groups_selected"
                                theme="select2"
                                ng-disabled="groups_disabled"
                                on-select="change_group($item)"
                                style={{ minWidth: 200 }}
                                title="Учебная группа">
                                <ui-select-match>$select.selected.NAME</ui-select-match>
                                <ui-select-choices repeat="gr in groups | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="gr.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                        <div className="col-sm-1">
                            <div className="checkbox">
                                <label><input type="checkbox" ng-model="only_sections" ng-change="change_only_sections()" ng-true-value="1" ng-false-value="0" />Только мое отделение</label>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="checkbox">
                                <label><input type="checkbox" ng-model="only_normatives" ng-change="change_only_normatives()" ng-true-value="1" ng-false-value="0" />Показывать только нормативы</label>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- Список студентов --> */}
                <table className="table table-hover">
                    <tr>
                        <th rowspan="2">Студент</th>
                        <th ng-if="!only_normatives" rowspan="2">Пол</th>
                        <th ng-if="!only_normatives" rowspan="2">Отделение</th>
                        <th ng-if="!only_normatives" rowspan="2">Преподаватель</th>
                        <th colspan={3}>Нормативы</th>
                        <th colspan={3}>Измерения</th>
                    </tr>
                    <tr>
                        <th ng-repeat="n in normatives">n.NAME</th>
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