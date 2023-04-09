import React from 'react';

class View8 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Панель отображения записавшихся студентов и поиска*/}
                <div class="panel panel-default" >
                    <div class="row">


                        <div class="col-sm-2">
                            <p>Семестр</p>
                            <ui-select ng-model="rec_sems_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_rec_sems($item)"
                                style={{ minWidth: 200 }}
                                title="Семестр">
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
                                <ui-select-choices repeat="s in semesters | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="s.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                        <div class="col-sm-2">
                            <p>Направление</p>
                            <ui-select ng-model="rec_sections_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_rec_sections($item)"
                                style={{ minWidth: 200 }}
                                title="Направление">
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
                                <ui-select-choices repeat="sec in rec_sections | propsFilter: {NAME: $select.search}">
                                    <div ng-bind-html="sec.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>
                        <div class="col-sm-2">
                            <p>Дата</p>
                            <a href="/"
                                editable-date="zachet_date"
                                onbeforesave="set_zachet_date($data)">
                                11 (zachet_date || "Не определено") | date:'yyyy.MM.dd' 22
                            </a>
                        </div>

                        <div class="col-sm-2">
                            <p>Пара</p>
                            <ui-select ng-model="pairs_selected"
                                theme="select2"
                                ng-disabled="false"
                                on-select="change_pairs($item)"
                                style={{ minWidth: 200 }}
                                title="Пара">
                                <ui-select-match>11 $select.selected.NAME 22</ui-select-match>
                                <ui-select-choices repeat="pair in pairs">
                                    <div ng-bind-html="pair.NAME"></div>
                                </ui-select-choices>
                            </ui-select>
                        </div>

                        <div class="col-sm-1">
                            <div class="row">
                                <button ng-click="set_all()">Были</button>
                            </div>
                            <div class="row">
                                <button ng-click="set_all_not()">Не были</button>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Список студентов */}
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th rowspan="1">№</th>
                            <th rowspan="1">Факультет, Курс, Группа</th>
                            <th rowspan="1">ФИО</th>
                            <th rowspan="1">Пол</th>
                            <th rowspan="1">Статус</th>
                            <th rowspan="1">Отметка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="x in students">
                            <td class="col-md-1">11 x.RN 22</td>
                            <td class="col-md-1">11 x.FACULTET 22, 11 x.COURSE 22, <a href="https://www.nstu.ru/studies/schedule/schedule_classes/schedule?group=11x.STUDY_GROUP22" target="_blank">11 x.STUDY_GROUP 22</a></td>
                            <td class="col-md-2">11 x.FIO 22</td>
                            <td class="col-md-1">11 x.SEX 22</td>
                            <td class="col-md-1">11 x.STATUS 22</td>
                            <td class="col-md-1"><a href="/" editable-checkbox="x.WAS" e-title="Был?" onbeforesave="updateWas($data,x.FK_STUDENT)">11 x.WAS == 1 && "Был" || x.WAS == 0 && "Не был" || "Проставить" 22</a></td>


                        </tr>
                    </tbody>
                </table>

            </div>


        )
    }
}

export default View8;