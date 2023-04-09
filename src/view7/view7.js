import React from 'react';

class View7 extends React.Component {
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

                        <div class="col-sm-2">
                            <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_blank?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                                Печать
                            </a>
                        </div>

                        <div class="col-sm-2">
                            <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_jrn?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                                Журнал
                            </a>
                        </div>

                        <div class="col-sm-2">
                            <p>Поиск</p>
                            <a href="/" editable-text="student_fio" e-label="ФИО для поиска" onbeforesave="change_fio($data)">11 student_fio || 'Поиск'22</a>
                        </div>

                    </div>
                </div>

                {/* Список студентов */}
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th rowspan="1">№</th>
                            <th rowspan="1">День, пара</th>
                            <th rowspan="1">2-ое занятие</th>
                            <th rowspan="1">Факультет</th>
                            <th rowspan="1">Курс</th>
                            <th rowspan="1">Группа</th>
                            <th rowspan="1">ФИО</th>
                            <th rowspan="1">Дист.</th>
                            <th rowspan="1">Пол</th>
                            <th rowspan="1">Статус</th>
                            <th rowspan="1">Зачёт</th>
                            <th rowspan="1">Оплата</th>
                            {/*      <th rowspan="1">Написал письмо</th>*/}
                            <th rowspan="1">Действия</th>
                            <th rowspan="1">К.Н. 7</th>
                            <th rowspan="1">К.Н. 12</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="x in students">
                            <td class="col-md-1">11 x.RN 22</td>
                            <td class="col-md-1">
                                <a href="/"
                                    ng-if="x.PAIR1=='Записать'"
                                    editable-select="x.PAIR1"
                                    e-ng-options="s.PAIR as s.PAIR for s in schedule"
                                    onshow="getSchedule1($data, x.ID_PERSON1, x.FK_STUDENT)"
                                    onbeforesave="updateSchedule1($data,x.FK_STUDENT)">
                                    11 x.PAIR1 || "Не определено" 22
                                </a>
                                <div ng-if="x.PAIR1 && x.PAIR1 != 'Записать'">11 x.PAIR1 22</div>
                            </td>
                            <td class="col-md-1">
                                <a href="/"
                                    ng-if="x.PAIR2=='Записать'"
                                    editable-select="x.PAIR2"
                                    e-ng-options="s.PAIR as s.PAIR for s in schedule"
                                    onshow="getSchedule2($data, x.ID_PERSON1, x.FK_STUDENT)"
                                    onbeforesave="updateSchedule2($data,x.FK_STUDENT)">
                                    11 x.PAIR2 || "Не определено" 22
                                </a>
                                <div ng-if="x.PAIR2 && x.PAIR2 != 'Записать'">11 x.PAIR2 22</div>
                            </td>
                            <td class="col-md-1">11 x.FACULTET 22</td>
                            <td class="col-md-1">11 x.COURSE 22</td>
                            <td class="col-md-1"><a href="https://www.nstu.ru/studies/schedule/schedule_classes/schedule?group=11x.STUDY_GROUP22" target="_blank">11 x.STUDY_GROUP 22</a></td>
                            <td class="col-md-2">11 x.FIO 22</td>
                            <td class="col-md-2">11 x.DISTANT 22</td>
                            <td class="col-md-1">11 x.SEX 22</td>
                            <td class="col-md-1">11 x.STATUS 22</td>
                            <td class="col-md-1">11 x.ZACHET 22</td>
                            <td class="col-md-1">11 x.PAYD 22</td>
                            {/*      <td class="col-md-1">11 x.LETTER 22</td>*/}
                            <td class="col-md-1">
                                <button ng-click="clkUnRec1(x.FK_STUDENT)" ng-if="x.CAN_UNREC1" ng-confirm-click="Уверены?">Отмена1</button>
                                <button ng-click="clkUnRec2(x.FK_STUDENT)" ng-if="x.CAN_UNREC2" ng-confirm-click="Уверены?">Отмена2</button>
                            </td>
                            <td class="col-md-1">11 x.WEEK_MARK_7 22</td>
                            <td class="col-md-1">11 x.WEEK_MARK_12 22</td>

                        </tr>
                    </tbody>
                </table>

            </div>


        )
    }
}

export default View7;