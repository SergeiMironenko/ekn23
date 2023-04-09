import React from "react";

class View1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div>
                    <button ng-click="clickToOpen()">Войти под другим преподавателем</button>
                </div>

                <table class="table table-hover">
                    <tr>
                        <th rowspan="2">Преподаватель</th>
                        <th colspan="3">Отделение</th>
                    </tr>
                    <tr>
                        <th>№1</th>
                        <th>№2</th>
                        <th>№3</th>
                    </tr>

                    <tr ng-repeat="x in persons">
                        <td class="col-md-1">11 x.FIO 22</td>
                        <td class="col-md-1">
                            <a href="/"
                                editable-select="x.FK_EKN_SECTIONS1"
                                e-ng-options="s.PK as s.NAME for s in sections"
                                onbeforesave="updatePersons($data,x.IDPERSON,1)">
                                11 x.SECTION1 || "Не определено" 22
                            </a>
                        </td>
                        <td class="col-md-1">
                            <a href="/"
                                editable-select="x.FK_EKN_SECTIONS2"
                                e-ng-options="s.PK as s.NAME for s in sections"
                                onbeforesave="updatePersons($data,x.IDPERSON,2)">
                                11 x.SECTION2 || "Не определено" 22
                            </a>
                        </td>
                        <td class="col-md-1">
                            <a href="/"
                                editable-select="x.FK_EKN_SECTIONS3"
                                e-ng-options="s.PK as s.NAME for s in sections"
                                onbeforesave="updatePersons($data,x.IDPERSON,3)">
                                11 x.SECTION3 || "Не определено" 22
                            </a>
                        </td>
                    </tr>
                </table>
                {/* <br> */}
                <div class="row">
                    <div class="panel panel-default">
                        <div class="panel-body">
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
                        </div>
                    </div>
                </div>

                <h2><span class="label label-default">Сводка по секциям</span></h2>
                <table class="table table-hover">
                    <tr>
                        <th>Секция</th>
                        <th>Студентов</th>
                    </tr>
                    <tr ng-repeat="x in section_report">
                        <td>11 x.SECTION 22</td>
                        <td>11 x.CNT 22</td>
                    </tr>
                </table>
                <h2><span class="label label-default">Сводка по заполнению</span></h2>
                <table class="table table-hover">
                    <tr>
                        <th rowspan="2">Преподаватель</th>
                        <th rowspan="2">Секция</th>
                        {/* <th colspan=11 normatives.length 22>Заполнено</th> */}
                    </tr>
                    <tr>
                        <th ng-repeat="n in normatives">11 n.SHORT 22</th>
                    </tr>
                    <tr ng-repeat="x in fill_report">
                        <td>11 x.PERSON 22</td>
                        <td>11 x.SECTION 22</td>
                        <td ng-repeat="n in normatives">
                            11 x["CNT" + n.PK]22
                        </td>
                    </tr>
                </table>
            </div>

        )
    }
}

export default View1;