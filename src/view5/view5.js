import React from 'react';

class View5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Панель выбора студентов */}
                <div className="panel panel-default" >
                    <div className="row">
                        <div className="col-sm-1">
                            <p>Год</p>
                            <ui-select ng-model="years_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_year($item)"
                                style={{ minWidth: 80 }}
                                title="Год">
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
                                <ui-select-choices repeat="y in years | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="y.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                        <div className="col-sm-1">
                            <p>Семестр</p>
                            <ui-select ng-model="semesters_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_sem($item)"
                                style={{ minWidth: 80 }}
                                title="Семестр">
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
                                <ui-select-choices repeat="s in semesters | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="s.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                        <div className="col-sm-3">
                            <p>Факультет</p>
                            <ui-select ng-model="facultets_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_facultet($item)"
                                style={{ minWidth: 200 }}
                                title="Факультет">
                                <ui-select-match>11 $select.selected.SHORTNAME 22</ui-select-match>
                                <ui-select-choices repeat="fac in facultets | propsFilter: {SHORTNAME: $select.search}">
                                    <div ng-bind-html="fac.SHORTNAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                        <div className="col-sm-1">
                            <div className="checkbox">
                                <label><input type="checkbox" ng-model="only_sport" ng-change="change_only_sport()" ng-true-value="1" ng-false-value="0" />Только спортсмены</label>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <p>Курс</p>
                            <ui-select ng-model="courses_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_course($item)"
                                style={{ minWidth: 200 }}
                                title="Курс">
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
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
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
                                <ui-select-choices repeat="gr in groups | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="gr.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                    </div>
                </div>
                <div ng-if="students[0].IS_ZAM_DEC">
                    Дата зачета для группы:
                    <a href="/"
                        editable-date="zachet_date"
                        onbeforesave="set_zachet_date($data)">
                        11 (zachet_date || "Не определено") | date:'yyyy.MM.dd' 22
                    </a>
                    <button className="btn btn-success" ng-click="zach_to_dec()">Принять</button>
                </div>
                <div ng-if="is_admin">
                    <button className="btn btn-success" ng-click="load_test()">Тесты</button>
                </div>


                {/* Список студентов */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th rowspan="3">Студент</th>
                            <th rowspan="3">Пол</th>
                            <th rowspan="3">Отделение</th>
                            <th rowspan="3">Преподаватель</th>
                            <th rowspan="3">Статус</th>
                            <th rowspan="1">1 этап</th>
                            <th rowspan="1" colspan="2" ng-if="show_oral">2 этап</th>
                            <th rowspan="1" ng-if="!show_oral">2 этап</th>
                            <th rowspan="1">3 этап</th>
                            <th rowspan="1">4 этап</th>
                            <th rowspan="3">Зачтено</th>
                            <th rowspan="3" ng-if="false">Дата</th>
                            <th rowspan="3">Деканат</th>
                        </tr>
                        <tr>
                            <th rowspan="2">Анкеты</th>
                            <th colspan="2" ng-if="show_oral">Тест</th>
                            <th rowspan="2" ng-if="!show_oral">Тест</th>
                            <th rowspan="2">3 вопроса</th>
                            <th rowspan="2">Сам. работа</th>
                        </tr>
                        <tr ng-if="show_oral">
                            <th>Комп.</th>
                            <th>Устный</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="x in students" ng-context-menu="menuStudents">
                            <td className="col-md-2">11 x.FIO 22 <div ng-if="only_sport"><br />11 x.STUDY_GROUP 22</div></td>
                            <td className="col-md-1">11 x.SEX 22</td>
                            <td className="col-md-1">
                                <a href="/"
                                    editable-select="x.FK_EKN_SECTIONS"
                                    e-ng-options="s.PK as s.NAME for s in sections"
                                    onbeforesave="updateStudentSections($data,x.FK_STUDENT)">
                                    11 x.SECTION || "Не определено" 22
                                </a>
                            </td>
                            <td className="col-md-1">
                                <a href="/"
                                    editable-select="x.ID_PERSON"
                                    edit-disabled="11x.IS_PERSON_DISABLED22"
                                    e-ng-options="s.IDPERSON as s.FIO for s in persons"
                                    onbeforesave="updateStudentPersons($data,x.FK_STUDENT)">
                                    11 x.PERSON || "Не определено" 22
                                </a>

                            </td>

                            <td className="col-md-1">
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
                                <a href="/" editable-checkbox="x.IS_SPORT" e-title="Спортсмен?" onbeforesave="updateStudentEKNStatus2($data,x.FK_STUDENT)">
                                    11 x.IS_SPORT && "Спортсмен" || "-" 22
                                </a>
                            </td>

                            <td className="col-md-1">
                                11 x.ANKETA 22
                            </td>

                            <td className="col-md-1">
                                11 x.TEST_RES 22
                            </td>

                            <td className="col-md-1" ng-if="show_oral">
                                <a href="/"
                                    editable-select="x.ORAL_TEST"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentOral($data,x.FK_STUDENT)" ng-if="x.SHOW_ORAL_STUD">
                                    11 x.ORAL_NAME || "Не определено" 22
                                </a>
                            </td>

                            <td className="col-md-1">
                                <a href="/"
                                    editable-select="x.PART3"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet3($data,x.FK_STUDENT)">
                                    11 x.PART3_NAME || "Не определено" 22
                                </a>
                            </td>

                            <td className="col-md-1">
                                <a href="/"
                                    editable-select="x.PART4"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet4($data,x.FK_STUDENT)">
                                    11 x.PART4_NAME || "Не определено" 22
                                </a>
                            </td>

                            <td className="col-md-1">
                                <a href="/"
                                    editable-select="x.ZACHET"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet($data,x.FK_STUDENT)">
                                    11 x.ZACHET_NAME || "Не определено" 22
                                </a>
                                11 x.ZACH_PERSON 22

                            </td>

                            <td className="col-md-1" ng-if="false">
                                <a href="/"
                                    editable-text="x.ZACHET_DATE"
                                    onbeforesave="updateStudentZachetDate($data,x.FK_STUDENT)">
                                    11 x.ZACHET_DATE || "Не определено" 22
                                </a>
                            </td>

                            <td className="col-md-1">
                                11 x.DECANAT_ZACHET 22
                            </td>


                        </tr>
                    </tbody>
                </table>

            </div>


        )
    }
}

export default View5;