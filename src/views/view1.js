import React from "react";
import Table from "../components/Table";
import { getData } from "../functions/data";
import Th from "../components/Th";
import Td from "../components/Td";
import SelectDiv from "../components/SelectDiv";
import Panel from "../components/Panel";
import SelectPanel from "../components/SelectPanel";

class View1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData(),
        }
    }

    studentsChange(H) {
        // let newData = this.state.data; // JSON.parse(JSON.stringify(this.state.data));
        // newData.students[0].H = H;
    }

    render() {
        const tableHead = [
            <tr key={1}>
                <Th colSpan="3">Отделение</Th>
                <Th className="align-top" rowSpan="2">Преподаватель</Th>
            </tr>,
            <tr key={2}>
                <Th>№1</Th>
                <Th>№2</Th>
                <Th>№3</Th>
            </tr>
        ];

        const tableBody = Array(0);
        this.state.data.students.forEach((student, i) => {
            tableBody.push(
                <tr key={i} ng-repeat="x in persons">
                    <Td className="col-md-1">{student.FIO}</Td>
                    <Td class="col-md-1">SECTION1
                        {/* <a href="#"
                            editable-select="x.FK_EKN_SECTIONS1"
                            e-ng-options="s.PK as s.NAME for s in sections"
                            onbeforesave="updatePersons($data,x.IDPERSON,1)">
                            11 x.SECTION1 || "Не определено" 22
                        </a> */}
                    </Td>
                    <Td className="col-md-1">SECTION2
                        {/* <a href="/"
                            editable-select="x.FK_EKN_SECTIONS2"
                            e-ng-options="s.PK as s.NAME for s in sections"
                            onbeforesave="updatePersons($data,x.IDPERSON,2)">
                            11 x.SECTION2 || "Не определено" 22
                        </a> */}
                    </Td>
                    <Td className="col-md-1">SECTION3
                        {/* <a href="/"
                            editable-select="x.FK_EKN_SECTIONS3"
                            e-ng-options="s.PK as s.NAME for s in sections"
                            onbeforesave="updatePersons($data,x.IDPERSON,3)">
                            11 x.SECTION3 || "Не определено" 22
                        </a> */}
                    </Td>
                </tr>
            )
        });
        return (
            <div>

                <div>
                    <button ng-click="clickToOpen()">Войти под другим преподавателем</button>
                </div>

                <Table thead={tableHead} tbody={tableBody} />
                {/* <br> */}
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
                </Panel>

                <h2><span className="label label-default">Сводка по секциям</span></h2>
                <Table
                    tbody={
                        <tr>
                            <Th>Секция</Th>
                            <Th>Студентов</Th>
                        </tr>
                    }
                    thead={
                        <tr ng-repeat="x in section_report">
                            <Td>11 x.SECTION 22</Td>
                            <Td>11 x.CNT 22</Td>
                        </tr>
                    }
                />
                <Table
                    thead={
                        <tr>
                            <Th>Секция</Th>
                            <Th>Студентов</Th>
                        </tr>
                    }
                    tbody={
                        <tr ng-repeat="x in section_report">
                            <Td>11 x.SECTION 22</Td>
                            <Td>11 x.CNT 22</Td>
                        </tr>
                    }
                />
                <h2><span className="label label-default">Сводка по заполнению</span></h2>
                <Table
                    thead={
                        <tr>
                            <Th rowspan="2">Преподаватель</Th>
                            <Th rowspan="2">Секция</Th>
                            {/* <th colspan=11 normatives.length 22>Заполнено</th> */}
                        </tr>
                    }
                    tbody={[
                        <tr key={1}>
                            <Th ng-repeat="n in normatives">11 n.SHORT 22</Th>
                        </tr>,
                        <tr key={2} ng-repeat="x in fill_report">
                            <Td>11 x.PERSON 22</Td>
                            <Td>11 x.SECTION 22</Td>
                            <Td ng-repeat="n in normatives">
                                11 x["CNT" + n.PK]22
                            </Td>
                        </tr>
                    ]}
                />
            </div>
        )
    }
}

export default View1;