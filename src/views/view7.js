import React from 'react';
import SelectPanel from '../components/SelectPanel';
import { getData } from '../functions/data';
import Td from '../components/Td';
import Th from '../components/Th';
import Table from '../components/Table';
import Panel from '../components/Panel';

class View7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData(),
        }
    }

    render() {
        const tableHead =
            <tr>
                <Th>№</Th>
                <Th>День, пара</Th>
                <Th>2-ое занятие</Th>
                <Th>Факультет</Th>
                <Th>Курс</Th>
                <Th>Группа</Th>
                <Th>ФИО</Th>
                <Th>Дист.</Th>
                <Th>Пол</Th>
                <Th>Статус</Th>
                <Th>Зачёт</Th>
                <Th>Оплата</Th>
                {/* <th rowspan="1">Написал письмо</th> */}
                <Th>Действия</Th>
                <Th>К.Н. 7</Th>
                <Th>К.Н. 12</Th>
            </tr>

        const tableBody = Array(0);

        this.state.data.students.forEach((student, i) => {
            tableBody.push(
                <tr key={i}>
                    {/* RN */}
                    <Td className="col-md-1">{i + 1}</Td>
                    <Td className="col-md-1">PAIR1
                        {/* <a href="/"
                            ng-if="x.PAIR1=='Записать'"
                            editable-select="x.PAIR1"
                            e-ng-options="s.PAIR as s.PAIR for s in schedule"
                            onshow="getSchedule1($data, x.ID_PERSON1, x.FK_STUDENT)"
                            onbeforesave="updateSchedule1($data,x.FK_STUDENT)">
                            11 x.PAIR1 || "Не определено" 22
                        </a>
                        <div ng-if="x.PAIR1 && x.PAIR1 != 'Записать'">11 x.PAIR1 22</div> */}
                    </Td>
                    <Td className="col-md-1">PAIR2
                        {/* <a href="/"
                            ng-if="x.PAIR2=='Записать'"
                            editable-select="x.PAIR2"
                            e-ng-options="s.PAIR as s.PAIR for s in schedule"
                            onshow="getSchedule2($data, x.ID_PERSON1, x.FK_STUDENT)"
                            onbeforesave="updateSchedule2($data,x.FK_STUDENT)">
                            11 x.PAIR2 || "Не определено" 22
                        </a>
                        <div ng-if="x.PAIR2 && x.PAIR2 != 'Записать'">11 x.PAIR2 22</div> */}
                    </Td>
                    <Td className="col-md-1">FACULTET</Td>
                    <Td className="col-md-1">COURSE</Td>
                    <Td className="col-md-1">STUDY_GROUP
                        {/* <a href="https://www.nstu.ru/studies/schedule/schedule_classes/schedule?group=11x.STUDY_GROUP22" target="_blank">11 x.STUDY_GROUP 22</a> */}
                    </Td>
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td className="col-md-2">DISTANT</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">STATUS</Td>
                    <Td className="col-md-1">ZACHET</Td>
                    <Td className="col-md-1">ZACHET</Td>
                    {/*      <td className="col-md-1">11 x.LETTER 22</td>*/}
                    <Td className="col-md-1">???
                        {/* <button ng-click="clkUnRec1(x.FK_STUDENT)" ng-if="x.CAN_UNREC1" ng-confirm-click="Уверены?">Отмена1</button>
                        <button ng-click="clkUnRec2(x.FK_STUDENT)" ng-if="x.CAN_UNREC2" ng-confirm-click="Уверены?">Отмена2</button> */}
                    </Td>
                    <Td className="col-md-1">WEEK_MARK_7</Td>
                    <Td className="col-md-1">WEEK_MARK_12</Td>
                </tr>
            );
        })

        return (
            <div>
                {/* Панель отображения записавшихся студентов и поиска*/}
                <Panel>
                    {/* Выбор семестра */}
                    <SelectPanel
                        outerDivClassName="col-sm-2"
                        value={this.state.semester}
                        change={this.semesterChange}
                        options={this.state.data.semestersOptions}
                        label="Семестр"
                    />

                    {/* Выбор направления (отделения) */}
                    <SelectPanel
                        outerDivClassName="col-sm-2"
                        value={this.state.semester}
                        change={this.semesterChange}
                        options={this.state.data.sectionsOptions}
                        label="Направление"
                    />

                    <div>Select Пара</div>
                    {/* <div className="col-sm-2">
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
                        </div> */}

                    <div>Печать</div>
                    {/* <div className="col-sm-2">
                            <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_blank?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                                Печать
                            </a>
                        </div> */}

                    <div>Журнал</div>
                    {/* <div className="col-sm-2">
                            <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_jrn?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                                Журнал
                            </a>
                        </div> */}

                    <div>Поиск</div>
                    {/* <div className="col-sm-2">
                            <p>Поиск</p>
                            <a href="/" editable-text="student_fio" e-label="ФИО для поиска" onbeforesave="change_fio($data)">11 student_fio || 'Поиск'22</a>
                        </div> */}
                </Panel>

                {/* Список студентов */}
                <Table thead={tableHead} tbody={tableBody} />
            </div>
        )
    }
}

export default View7;