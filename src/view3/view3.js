import React from "react";

class View3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <tr>
                        <th rowspan="2">Факультет</th>
                        <th rowspan="2">Направление</th>
                        <th rowspan="2">Группа</th>
                        <th rowspan="2">Физическая культура</th>
                        <th>Прикладная физическая культура</th>
                    </tr>
                    <tr>
                        <th>№1</th>
                        <th>№2</th>
                    </tr>
                    <tr ng-repeat="x in accr_groups">
                        <td className="col-md-2">11 x.FACULTET 22</td>
                        <td className="col-md-2">11 x.OKSO 22</td>
                        <td className="col-md-2">11 x.STUDY_GROUP 22</td>
                        <td className="col-md-2">
                            <a href="/"
                                editable-select="x.ID_PERSON0"
                                e-ng-options="s.IDPERSON as s.FIO for s in persons"
                                onbeforesave="updateGroupPersons($data,x.FK_STUDY_GROUP,0)">
                                11 x.PERSON0 || "Не определено" 22
                            </a>
                        </td>
                        <td className="col-md-2">
                            <a href="/"
                                editable-select="x.ID_PERSON0"
                                e-ng-options="s.IDPERSON as s.FIO for s in persons"
                                onbeforesave="updateGroupPersons($data,x.FK_STUDY_GROUP,1)">
                                11 x.PERSON1 || "Не определено" 22
                            </a>
                        </td>
                        <td className="col-md-2">
                            <a href="/"
                                editable-select="x.ID_PERSON0"
                                e-ng-options="s.IDPERSON as s.FIO for s in persons"
                                onbeforesave="updateGroupPersons($data,x.FK_STUDY_GROUP,2)">
                                11 x.PERSON2 || "Не определено" 22
                            </a>
                        </td>
                    </tr>
                </table>
            </div>

        )
    }
}

export default View3;