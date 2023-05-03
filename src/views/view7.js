import { useState } from 'react';
import SelectPanel from '../components/SelectPanel';
import * as st from '../functions/data';
import Td from '../components/Td';
import Th from '../components/Th';
import Table from '../components/Table';
import Panel from '../components/Panel';
import SelectDiv from '../components/SelectDiv';
import Input from '../components/Input';

export default function View7(props) {
    const [data] = useState(st.getData());
    const [semester, setSemester] = useState(data.semesters[0].NAME);
    const [section, setSection] = useState(data.sections[0]);
    const [pair, setPair] = useState(data.pairs[0]);
    const [search, setSearch] = useState('');

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

    data.students.forEach((student, i) => {
        if (student.FIO.toLowerCase().match(search.toLowerCase()) &&
            student.SEMESTER === semester &&
            student.SECTION === section &&
            (student.PAIR1 === pair || student.PAIR2 === pair)) {
            tableBody.push(
                <tr key={i}>
                    {/* RN */}
                    <Td className="col-md-1">{i + 1}</Td>
                    <Td className="col-md-1">
                        <SelectDiv id={i} list={data.pairsOptions} updateMethod={st.updateStudentPair1} value={student.PAIR1} />
                    </Td>
                    <Td className="col-md-1">
                        <SelectDiv id={i} list={data.pairsOptions} updateMethod={st.updateStudentPair2} value={student.PAIR2} />
                    </Td>
                    <Td className="col-md-1">{student.FACULTET}</Td>
                    <Td className="col-md-1">{student.COURSE}</Td>
                    <Td className="col-md-1">
                        <a href={"https://www.nstu.ru/studies/schedule/schedule_classes/schedule?group=" + student.STUDY_GROUP}>{student.STUDY_GROUP}</a>
                    </Td>
                    <Td className="col-md-2">{student.FIO}</Td>
                    <Td className="col-md-2">{student.IS_DIST ? "да" : "нет"}</Td>
                    <Td className="col-md-1">{student.SEX}</Td>
                    <Td className="col-md-1">{student.FK_EKN_STATUS}</Td>
                    <Td className="col-md-1">ZACHET</Td>
                    <Td className="col-md-1">{student.PAYM}</Td>
                    {/* <td className="col-md-1">11 x.LETTER 22</td> */}
                    <Td className="col-md-1">
                        ???
                        {/* <button ng-click="clkUnRec1(x.FK_STUDENT)" ng-if="x.CAN_UNREC1" ng-confirm-click="Уверены?">Отмена1</button>
                        <button ng-click="clkUnRec2(x.FK_STUDENT)" ng-if="x.CAN_UNREC2" ng-confirm-click="Уверены?">Отмена2</button> */}
                    </Td>
                    <Td className="col-md-1">{student.WEEK_MARK_7}</Td>
                    <Td className="col-md-1">{student.WEEK_MARK_12}</Td>
                </tr>
            );
        }
    })

    return (
        <div>
            {/* Панель отображения записавшихся студентов и поиска*/}
            <Panel>
                {/* Выбор семестра */}
                <SelectPanel
                    outerDivClassName="col-sm-2"
                    value={semester}
                    onChange={e => setSemester(e.target.value)}
                    options={data.semestersOptions}
                    label="Семестр"
                />

                {/* Выбор направления (отделения) */}
                <SelectPanel
                    outerDivClassName="col-sm-2"
                    value={section}
                    onChange={e => setSection(e.target.value)}
                    options={data.sectionsOptions}
                    label="Направление"
                />

                {/* Выбор пары */}
                <SelectPanel
                    outerDivClassName="col-sm-2"
                    value={pair}
                    onChange={e => setPair(e.target.value)}
                    options={data.pairsOptions}
                    label="Пара"
                />

                {/* Печать */}
                <div className="col-sm-1">
                    <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_blank?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                        Печать
                    </a>
                </div>

                {/* Журнал */}
                <div className="col-sm-1">
                    <a href="https://api.ciu.nstu.ru/v1.0/fvekn/get_jrn?fk_ekn_sections=11idSection22&fk_ers=11idPairs22">
                        Журнал
                    </a>
                </div>

                {/* Поиск */}
                <div className="col-sm-4">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text">Поиск по ФИО</span>
                        {/* <input type="text" class="form-control" onChange={e => setSearch(e.target.value)} /> */}
                        <Input type="text" className="form-control" onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>
            </Panel>

            {/* Список студентов */}
            <Table thead={tableHead} tbody={tableBody} />
        </div>
    )
}