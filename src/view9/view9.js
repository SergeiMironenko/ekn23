import React from 'react';

class View9 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Панель выбора студентов */}
                <div class="panel panel-default" >
                    <div class="row">
                        <div class="col-sm-1">
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

                        <div class="col-sm-1">
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

                        <div class="col-sm-3">
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

                        <div class="col-sm-1">
                            <div class="checkbox">
                                <label><input type="checkbox" ng-model="only_sport" ng-change="change_only_sport()" ng-true-value="1" ng-false-value="0" />Только спортсмены</label>
                            </div>
                        </div>

                        <div class="col-sm-3">
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
                        <div class="col-sm-3">
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
                        <div class="col-sm-1">
                            <div class="checkbox">
                                <label><input type="checkbox" ng-model="only_sections" ng-change="change_only_sections()" ng-true-value="1" ng-false-value="0" />Только итоги</label>
                            </div>
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
                    <button class="btn btn-success" ng-click="zach_to_dec()">Принять</button>
                </div>

                <div ng-if="is_admin">
                    <button class="btn btn-success" ng-click="load_test()">Тесты</button>
                </div>

                {/* Список студентов */}
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th rowspan="1">Студент</th>
                            <th rowspan="1">Пол</th>
                            <th rowspan="1">Статус</th>
                            <th rowspan="1">Отделение</th>
                            <th rowspan="1">Преподаватель</th>
                            <th rowspan="1">Оплата</th>
                            <th rowspan="1" ng-if="showg_attend && !only_sections">Посещ.</th>
                            <th rowspan="1" ng-if="showg_referat && !only_sections">Реф.</th>
                            <th rowspan="1" ng-if="showg_normative1 && !only_sections">Норм. 1</th>
                            <th rowspan="1" ng-if="showg_normative2 && !only_sections">Норм. 2</th>
                            <th rowspan="1" ng-if="showg_ekn_ball && !only_sections">ЕКН</th>
                            <th rowspan="1" ng-if="showg_gto_ball && !only_sections">ГТО</th>
                            <th rowspan="1" ng-if="showg_theory && !only_sections">Теория</th>
                            <th rowspan="1" ng-if="showg_test_ball && !only_sections">Тест</th>
                            <th rowspan="1" ng-if="showg_compl_ball && !only_sections">Комплекс</th>
                            <th rowspan="1" ng-if="showg_admit">Допуск</th>
                            <th rowspan="1" ng_if="!only_sections">Всего</th>
                            <th rowspan="1">Баллы</th>
                            <th rowspan="1">Зачет</th>
                            <th rowspan="1">Итоговый зачет</th>
                            <th rowspan="1">Пред. сем.</th>
                            <th rowspan="1" ng-if="showg_email">e-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="x in students" ng-context-menu="menuStudents">
                            <td class="col-md-2" rowspan="11x.ROWSPAN22" ng-if="x.RN==1">11 x.FIO 22 <div ng-if="only_sport"><br />11 x.STUDY_GROUP 22</div></td>
                            <td class="col-md-1" rowspan="11x.ROWSPAN22" ng-if="x.RN==1">11 x.SEX 22</td>
                            <td class="col-md-1" rowspan="11x.ROWSPAN22" ng-if="x.RN==1">
                                <div ng-if="x.RN==1">
                                    <span ng-class="mo_classes[x.FK_EKN_STATUS || 0]">
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
                                </div>
                            </td>

                            <td class="col-md-1">
                                11 x.SECTION || "Не определено" 22
                            </td>

                            <td class="col-md-1">
                                11 x.PERSON || "Не определено" 22
                            </td>

                            <td class="col-md-1">
                                11 x.PAYM 22
                            </td>

                            <td class="col-md-1" ng-if="showg_attend  && !only_sections">
                                <a href="/"
                                    editable-text="x.ATTEND"
                                    edit-disabled="x.IS_DISABLED"
                                    onaftersave="updateStudentCol($data,x.PK,'attend')" ng-if="x.SHOW_ATTEND && !x.IS_DISABLED">
                                    11 x.ATTEND || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.ATTEND 22</span>
                            </td>

                            <td class="col-md-1" ng-if="showg_referat && !only_sections">
                                <a href="/"
                                    editable-text="x.REFERAT"
                                    edit-disabled="x.IS_DISABLED"
                                    onaftersave="updateStudentCol($data,x.PK,'referat')" ng-if="x.SHOW_REFERAT && !x.IS_DISABLED">
                                    11 x.REFERAT || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.REFERAT 22</span>
                            </td>

                            <td class="col-md-1" ng-if="showg_normative1 && !only_sections">
                                <a href="/"
                                    editable-text="x.NORMATIVE1"
                                    edit-disabled="x.IS_DISABLED"
                                    onaftersave="updateStudentCol($data,x.PK,'normative1')" ng-if="x.SHOW_NORMATIVE1 && !x.IS_DISABLED">
                                    11 x.NORMATIVE1 || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.NORMATIVE1 22</span>
                            </td>

                            <td class="col-md-1" ng-if="showg_normative2 && !only_sections">
                                <a href="/"
                                    editable-text="x.NORMATIVE2"
                                    edit-disabled="x.IS_DISABLED"
                                    onaftersave="updateStudentCol($data,x.PK,'normative2')" ng-if="x.SHOW_NORMATIVE2 && !x.IS_DISABLED">
                                    11 x.NORMATIVE2 || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.NORMATIVE2 22</span>
                            </td>


                            <td class="col-md-1" ng-if="showg_ekn_ball && !only_sections">
                                <a href="/"
                                    editable-text="x.EKN_BALL"
                                    edit-disabled="x.IS_DISABLED_EKN"
                                    onaftersave="updateStudentCol($data,x.PK,'enk_ball')" ng-if="x.SHOW_EKN_BALL && !x.IS_DISABLED_EKN">
                                    11 x.EKN_BALL || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED_EKN">11 x.EKN_BALL 22</span>
                            </td>

                            <td class="col-md-1" ng-if="showg_gto_ball && !only_sections">
                                <a href="/"
                                    editable-text="x.GTO_BALL"
                                    edit-disabled="x.IS_DISABLED_GTO"
                                    onaftersave="updateStudentCol($data,x.PK,'gto_ball')" ng-if="x.SHOW_GTO_BALL && !x.IS_DISABLED_GTO">
                                    11 x.GTO_BALL || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED_GTO">11 x.GTO_BALL 22</span>
                            </td>


                            <td class="col-md-1" ng-if="showg_theory && !only_sections">
                                <a href="/"
                                    editable-text="x.THEORY"
                                    edit-disabled="x.IS_DISABLED"
                                    onaftersave="updateStudentCol($data,x.PK,'theory')" ng-if="x.SHOW_THEORY && !x.IS_DISABLED">
                                    11 x.THEORY || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.THEORY 22</span>
                            </td>


                            <td class="col-md-1" ng-if="showg_test_ball  && !only_sections">
                                <a href="/"
                                    editable-text="x.TEST_BALL"
                                    edit-disabled="11x.IS_DISABLED22"
                                    onaftersave="updateStudentCol($data,x.PK,'test_ball')" ng-if="x.SHOW_TEST_BALL && !x.IS_DISABLED">
                                    11 x.TEST_BALL || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.TEST_BALL 22</span>
                            </td>


                            <td class="col-md-1" ng-if="showg_compl_ball && !only_sections">
                                <a href="/"
                                    editable-text="x.COMPL_BALL"
                                    edit-disabled="11x.IS_DISABLED22"
                                    onaftersave="updateStudentCol($data,x.PK,'compl_ball')" ng-if="x.SHOW_COMPL_BALL && !x.IS_DISABLED">
                                    11 x.COMPL_BALL || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.COMPL_BALL 22</span>
                            </td>

                            <td class="col-md-1" ng-if="showg_admit">
                                <a href="/"
                                    editable-select="x.ADMIT"
                                    edit-disabled="11x.IS_DISABLED22"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentCol($data,x.PK, 'admit')" ng-if="x.SHOW_ADMIT && !x.IS_DISABLED">
                                    11 x.ADMIT || "Не определено" 22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.ADMIT 22</span>
                            </td>

                            <td class="col-md-1" ng-if="!only_sections">
                                11 x.TOTAL 22
                            </td>

                            <td class="col-md-1">
                                <a href="/"
                                    editable-text="x.ALL_BALLS"
                                    edit-disabled="11x.IS_DISABLED22"
                                    onbeforesave="updateStudentCol($data,x.PK, 'all_balls')" ng-if="!x.IS_DISABLED">
                                    11 (x.ALL_BALLS == null ? '' : x.ALL_BALLS).toString() || "Не определено"22
                                </a>
                                <span ng-if="x.IS_DISABLED">11 x.ALL_BALLS 22</span>
                            </td>

                            <td class="col-md-1">
                                <a href="/"
                                    editable-select="x.ZACHET"
                                    edit-disabled="11x.CANNOT_ZACHET22"
                                    e-ng-options="s.PK as s.NAME for s in parts"
                                    onbeforesave="updateStudentZachet($data,x.FK_STUDENT,x.PK)"
                                    ng-if="!x.CANNOT_ZACHET">
                                    11 x.ZACHET_NAME || "Не определено" 22
                                </a>
                                <span ng-if="x.CANNOT_ZACHET">11 x.ZACHET_NAME 22</span>
                            </td>

                            <td class="col-md-1" rowspan="11x.ROWSPAN22">
                                <span>11 x.FINAL_ZACHET_NAME 22</span>
                            </td>
                            <td class="col-md-1" rowspan="11x.ROWSPAN22">
                                <span>11 x.DECANAT_ZACHET 22</span>
                            </td>
                            <td class="col-md-1" rowspan="11x.ROWSPAN22" ng-if="showg_email">
                                <span>11 x.EMAIL 22</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        )
    }
}

export default View9;